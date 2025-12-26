

import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Basketball Technicals</title>
        <meta name="description" content="Basketbol teknikleri, kuralları, taktikleri ve pozisyonları" />
      </Head>
      <section style={{textAlign:'center',marginTop:'48px',marginBottom:'48px'}}>
        <div style={{display:'flex',justifyContent:'center',marginBottom:'32px'}}>
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/bSwg_p_wzuA"
            title="Basketbol Teknikleri Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{borderRadius:'18px',boxShadow:'0 4px 32px rgba(0,0,0,0.18)'}}
          ></iframe>
        </div>
        <h1 style={{fontSize:'2.8rem',fontWeight:'bold',color:'#f7b32b',letterSpacing:'2px',marginBottom:'18px'}}>Basketball Technicals</h1>
        <p style={{fontSize:'1.3rem',color:'#b2b8c6',maxWidth:'600px',margin:'0 auto 32px'}}>
          Basketbolun tüm teknikleri, kuralları, taktikleri ve oyuncu pozisyonları Her seviyeden basketbolcu için rehber.
        </p>
        <div style={{display:'flex',justifyContent:'center',gap:'32px',flexWrap:'wrap',marginTop:'32px'}}>
          <a href="/kurallar" style={{background:'#232a3d',color:'#f7b32b',padding:'24px 38px',borderRadius:'18px',fontSize:'1.2rem',fontWeight:'bold',boxShadow:'0 4px 24px rgba(0,0,0,0.12)',textDecoration:'none',transition:'0.2s'}}>Kurallar</a>
          <a href="/teknikler" style={{background:'#232a3d',color:'#f7b32b',padding:'24px 38px',borderRadius:'18px',fontSize:'1.2rem',fontWeight:'bold',boxShadow:'0 4px 24px rgba(0,0,0,0.12)',textDecoration:'none',transition:'0.2s'}}>Teknikler</a>
          <a href="/taktikler" style={{background:'#232a3d',color:'#f7b32b',padding:'24px 38px',borderRadius:'18px',fontSize:'1.2rem',fontWeight:'bold',boxShadow:'0 4px 24px rgba(0,0,0,0.12)',textDecoration:'none',transition:'0.2s'}}>Taktikler</a>
          <a href="/pozisyonlar" style={{background:'#232a3d',color:'#f7b32b',padding:'24px 38px',borderRadius:'18px',fontSize:'1.2rem',fontWeight:'bold',boxShadow:'0 4px 24px rgba(0,0,0,0.12)',textDecoration:'none',transition:'0.2s'}}>Pozisyonlar</a>
        </div>
      </section>
    </Layout>
  )
}
