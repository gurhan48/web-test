import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="site" style={{background:'linear-gradient(120deg,#1a2236 0%,#232a3d 100%)',minHeight:'100vh',color:'#f5f6fa'}}>
      <header className="site-header" style={{padding:'0',background:'rgba(20,24,38,0.98)',boxShadow:'0 2px 16px rgba(0,0,0,0.08)'}}>
        <nav className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'24px 0'}}>
          <Link href="/" style={{fontWeight:'bold',fontSize:'2rem',color:'#f7b32b',textDecoration:'none',letterSpacing:'2px'}}>Basketball Technicals</Link>
          <div style={{display:'flex',gap:'32px'}}>
            <Link href="/kurallar" style={{color:'#fff',fontSize:'1.1rem',textDecoration:'none'}}>Kurallar</Link>
            <Link href="/teknikler" style={{color:'#fff',fontSize:'1.1rem',textDecoration:'none'}}>Teknikler</Link>
            <Link href="/taktikler" style={{color:'#fff',fontSize:'1.1rem',textDecoration:'none'}}>Taktikler</Link>
            <Link href="/pozisyonlar" style={{color:'#fff',fontSize:'1.1rem',textDecoration:'none'}}>Pozisyonlar</Link>
          </div>
        </nav>
      </header>
      <main className="container" style={{maxWidth:'980px',margin:'0 auto',padding:'32px 16px'}}>{children}</main>
      <footer className="site-footer" style={{textAlign:'center',padding:'32px 0',color:'#b2b8c6',fontSize:'15px'}}>© {new Date().getFullYear()} Basketball Technicals</footer>
    </div>
  )
}
