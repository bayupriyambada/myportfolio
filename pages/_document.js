import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C3X35TZY5E"></script>
        <script
            async
            dangerouslySetInnerHTML={{
              __html: ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-C3X35TZY5E');;`
            }}
          />
      </Head>
      <body className='bg-[#000320] my-5'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
