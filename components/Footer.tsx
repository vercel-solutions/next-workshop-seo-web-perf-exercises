import { useEffect, useState } from 'react'
import Image from 'next/image'
import now from 'lodash/now'

const Footer = () => {
  const [timeStamp, setTimeStamp] = useState(0)
  useEffect(() => {
    setTimeStamp(now())
  }, [])

  return (
    <footer
      style={{
        padding: 48,
        borderTop: '1px solid #eaeaea',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fafafa',
      }}
    >
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        target="_blank"
      >
        Powered by{' '}
        <span style={{ height: 16, marginLeft: 12 }}>
          <Image
            alt={`timestamp: ${timeStamp.toString()}`}
            height={16}
            width={72}
            layout="fixed"
            src="/vercel.svg"
          />
        </span>
      </a>
    </footer>
  )
}

export default Footer
