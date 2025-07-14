import duo_web from 'duo_web';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const IKEY = process.env.IKEY;
  const SKEY = process.env.SKEY;
  const AKEY = process.env.AKEY;
  const HOST = process.env.API_HOSTNAME;
  const username = "testuser";

  const sig_request = duo_web.sign_request(IKEY, SKEY, AKEY, username);

  const iframe = `
    <html>
      <head>
        <script src="https://${HOST}/frame/web/v1/auth.js"></script>
      </head>
      <body>
        <iframe id="duo_iframe"
                width="100%"
                height="500"
                frameborder="0"
                allowfullscreen
                src="https://${HOST}/frame/web/v1/auth?tx=${sig_request}">
        </iframe>
      </body>
    </html>
  `;

  res.setHeader("Content-Type", "text/html");
  res.end(iframe);
}
