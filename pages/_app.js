import React from 'react';
import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='container flex-column w-full'>  
        <nav className='nav'>
          <div className='link'>
            <Link href="/">Home</Link>
          </div>
          <div className='link'>
            <Link href="/ssr">SSR</Link>
          </div>
          <div className='link'>
            <Link href="/ssg">SSG</Link>
          </div>
          <div className='link' id="csr">
            <Link href="/csr">CSR</Link>
          </div>
        </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
