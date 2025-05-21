export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://placehold.co/600x400?text=You+Won+X+vs+O" />
        <meta property="fc:frame:button:1" content="Claim NFT" />
        <meta property="fc:frame:post_url" content="https://xvo-frame.vercel.app/api/frame" />
        <meta http-equiv="refresh" content="0; url=https://thirdweb.com/base/0x6f5114c193caFf91b4732B9678276e5d7CfB77fe/nfts/0" />
      </head>
    </html>
  `);
}
