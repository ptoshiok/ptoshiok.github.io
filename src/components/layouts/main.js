import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../footer'
import NavBar from '../navbar'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Paulo's homepage" />
        <meta name="author" content="Paulo Kitayama" />
        <meta name="author" content="ptoshiok" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Paulo Kitayama" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Paulo Kitayama" />
        <meta name="og:title" content="Paulo Kitayama" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Paulo Kitayama - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Box
          mb={'30px'}
          position="relative"
          alignContent={'center'}
        >
          <Image
            src="/images/hyperk-2.jpeg"
            alt="Profile image"
            width="1000"
            height="200"
          />
        </Box>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
