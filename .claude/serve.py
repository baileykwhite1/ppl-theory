"""Dev server for the preview pane. Sends no-store so edits are picked up immediately;
the real site is cached by the service worker instead."""
import http.server, socketserver, sys

class H(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        super().end_headers()

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8791
socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(('', port), H) as httpd:
    print('serving on', port)
    httpd.serve_forever()
