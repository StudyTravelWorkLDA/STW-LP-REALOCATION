import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('577598564117202') // facebookPixelId
        ReactPixel.pageView()
        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
    </>)
}

export default MyApp
