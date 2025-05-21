export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://placehold.co/600x400?text=You+Clicked!" />
        <meta property="fc:frame:button:1" content="Play again" />
      </head>
    </html>
  `);
}
