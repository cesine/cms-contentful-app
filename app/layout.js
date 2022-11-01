import '../styles/index.css'

import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from '../components/header'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <html>
        <body>
          <Header />
          <div className="min-h-screen">
            <Alert preview={preview} />
            <main className="container mx-auto px-5">{children}</main>
          </div>
          <Footer />
        </body>
      </html>
    </>
  )
}