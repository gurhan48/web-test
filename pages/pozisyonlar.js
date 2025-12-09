import Head from 'next/head'
import Layout from '../components/Layout'

export default function Pozisyonlar() {
  return (
    <Layout>
      <Head>
        <title>Basketbol Pozisyonları | Basketball Technicals</title>
      </Head>
      <section>
        <h2 style={{color:'#f7b32b',fontSize:'2rem',marginBottom:'18px'}}>Oyuncu Pozisyonları</h2>
        <ul style={{fontSize:'1.1rem',color:'#e6eef8',lineHeight:'1.7'}}>
          <li><b>Point Guard (PG):</b> Oyun kurucu, hücumu başlatır ve takımı yönetir.</li>
          <li><b>Shooting Guard (SG):</b> Skorer, şut ve dış atışlarda etkilidir.</li>
          <li><b>Small Forward (SF):</b> Hem hücum hem savunmada çok yönlü.</li>
          <li><b>Power Forward (PF):</b> Pota altı ve orta mesafe şutlarda güçlü.</li>
          <li><b>Center (C):</b> Takımın en uzun oyuncusu, ribaund ve bloklarda etkili.</li>
        </ul>
      </section>
    </Layout>
  )
}
