// Root layout (app/layout.js)
// - Applies to all routes
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        This is the root
        {children}
      </body>
    </html>
  )
}
