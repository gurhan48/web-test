import Head from 'next/head'
import Layout from '../components/Layout'

export default function Kurallar() {
  return (
    <Layout>
      <Head>
        <title>Basketbol Kuralları | Basketball Technicals</title>
      </Head>
      <section>
        <h2 style={{color:'#f7b32b',fontSize:'2rem',marginBottom:'18px'}}>Basketbol Kuralları</h2>
        <ul style={{fontSize:'1.1rem',color:'#e6eef8',lineHeight:'1.7'}}>
          <li>Oyun 2 takım arasında oynanır, her takımda 5 oyuncu bulunur.</li>
          <li>Maç 4 periyot (çeyrek) ve her biri 10-12 dakikadır.</li>
          <li>Topu potaya atarak sayı kazanılır: 2 sayı, 3 sayı ve serbest atış (1 sayı).</li>
          <li>Topla 3 saniyeden fazla pota altında kalmak yasaktır.</li>
          <li>Faul, steps, çift top, geri saha gibi ihlaller vardır.</li>
          <li>Her oyuncunun 5 faul hakkı vardır, fazlası oyundan çıkar.</li>
          <li>24 saniye hücum süresi ve 8 saniye yarı sahayı geçme kuralı vardır.</li>
          <li>Oyun başında ve her periyot başında hava atışı yapılır.</li>
        </ul>
      </section>
    </Layout>
  )
}
