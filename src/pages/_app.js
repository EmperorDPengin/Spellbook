import { Analytics } from "@vercel/analytics"
import '../styles/globals.scss';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;