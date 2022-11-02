import '../styles/index.css'

import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from '../components/header'

export default function Layout({ preview, children }) {
  // TODO how to set cache-control headers
  return (
    <html>
      <Meta />
      <body>
        <Header />
        <div className="min-h-screen">
          <Alert preview={preview} />
          <main className="container mx-auto px-5">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}