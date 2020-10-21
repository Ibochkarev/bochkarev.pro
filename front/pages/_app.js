import React from 'react'
import Head from 'next/head'

import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
