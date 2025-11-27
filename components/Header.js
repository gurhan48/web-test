import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">Gürhan'ın Blogu</Link>
        <nav>
          <Link href="/">Yazılar</Link>
        </nav>
      </div>
    </header>
  )
}
