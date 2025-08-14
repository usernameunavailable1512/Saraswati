import http.server
import socketserver
import webbrowser
import threading
import time
import os

PORT = 8000

# Get the current directory
# current_dir = os.path.dirname(os.path.abspath(__file__))
current_dir = os.getcwd()
os.chdir(current_dir)

def open_browser():
    """Open browser after a short delay to ensure server is running"""
    time.sleep(1)
    url = f"http://localhost:{PORT}"
    print(f"Opening browser at {url}")
    webbrowser.open(url)

# Define the handler
handler = http.server.SimpleHTTPRequestHandler

# Create the server
with socketserver.TCPServer(("", PORT), handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    
    # Start a thread to open the browser
    threading.Thread(target=open_browser).start()
    
    # Start the server
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.") 