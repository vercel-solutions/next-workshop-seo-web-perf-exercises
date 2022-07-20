import React, { Suspense } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Script from 'next/script'

const DynamicFooter = dynamic(() => import('./Footer'), {
  suspense: true,
})

interface Props {
  children: React.ReactNode
}

const Page: React.VFC<Props> = ({ children }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
      }}
    >
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-410V9W6CWJ"
      ></Script>

      <Script
        strategy="afterInteractive"
        id="GTM-script"
        dangerouslySetInnerHTML={{
          __html: `
              
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-410V9W6CWJ');
              
              `,
        }}
      />

      <Head>
        <title>Restaurant Catalog</title>
        <meta content="list of local restaurants" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            padding: 24,
            borderBottom: '1px solid #eaeaea',
            boxShadow: '0 0 15px 0 rgb(0 0 0 / 10%)',
          }}
        >
          <h1>Welcome to the places catalog!</h1>
          <p>
            You can find here great places to eat and spent time with your
            frineds.
          </p>
          <p style={{ padding: '10px', color: 'darkblue' }}>
            <Link href="/">Home</Link>
          </p>
        </div>
        <div
          style={{
            padding: 24,
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: 1024,
            margin: 'auto',
            width: '100%',
          }}
        >
          {children}
        </div>
      </main>
      <Suspense fallback={`Loading...`}>
        <DynamicFooter />
      </Suspense>
    </div>
  )
}

export default Page
