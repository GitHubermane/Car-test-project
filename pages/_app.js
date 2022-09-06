import { wrapper } from '../Redux/Store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
wrapper
export default wrapper.withRedux(MyApp)
