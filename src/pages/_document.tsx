import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta property="og:url" content="https://saiken-voice.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="#再見ボイス" />
        <meta property="og:description" content="GUMIやIAをはじめ、重音テト、音街ウナ、可不、歌愛ユキだけでなく、話題のずんだもんや琴葉姉妹も！CeVIO・SynthesizerVや、各種トークソフトのキャラクターに焦点を当てたDJイベント！" />
        <meta property="og:image" content="https://saiken-voice.vercel.app/ogp.webp" />
      </Head>
      <body>
        <div className="background-container">
          <div className="background"></div>
        </div>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('scroll', function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = scrollTop / docHeight;
                const background = document.querySelector('.background');
                if (background) {
                  const bgHeight = background.clientHeight;
                  const moveDistance = bgHeight - window.innerHeight;
                  background.style.transform = 'translateY(-' + (moveDistance * scrollPercent) + 'px)';
                }
              });
            `,
          }}
        />
      </body>
    </Html>
  );
}