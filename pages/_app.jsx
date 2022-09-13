import { wrapper } from '../Redux/Store'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
wrapper
export default wrapper.withRedux(MyApp)
