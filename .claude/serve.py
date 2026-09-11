"""Dev server for the preview pane. Sends no-store so edits are picked up immediately;
the real site is cached by the service worker instead.

It also accepts POST /__save/<name>, which writes the body to .claude/scratch/<name>.
That is how the SVG audit harness gets its measurements out of the browser and onto
disk: text layout can only be measured by a real layout engine, so the numbers have
to come from the page rather than from a script reading the source."""
import http.server, socketserver, sys, os, re

SCRATCH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'scratch')

class H(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def do_POST(self):
        m = re.fullmatch(r'/__save/([A-Za-z0-9._-]{1,64})', self.path)
        if not m:
            self.send_error(404); return
        n = int(self.headers.get('Content-Length') or 0)
        body = self.rfile.read(n)
        os.makedirs(SCRATCH, exist_ok=True)
        with open(os.path.join(SCRATCH, m.group(1)), 'wb') as f:
            f.write(body)
        self.send_response(200); self.send_header('Content-Length', '2'); self.end_headers()
        self.wfile.write(b'ok')

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8791
socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(('', port), H) as httpd:
    print('serving on', port)
    httpd.serve_forever()
