import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="site">
      <Header />
      <main className="container">{children}</main>
      <footer className="site-footer">© {new Date().getFullYear()} Gürhan Savaş Akdağ</footer>
    </div>
  )
}
