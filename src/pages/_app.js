import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
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
