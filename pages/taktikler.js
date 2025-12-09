import Head from 'next/head'
import Layout from '../components/Layout'

export default function Taktikler() {
  return (
    <Layout>
      <Head>
        <title>Basketbol Taktikleri | Basketball Technicals</title>
      </Head>
      <section>
        <h2 style={{color:'#f7b32b',fontSize:'2rem',marginBottom:'18px'}}>Basketbol Taktikleri</h2>
        <ul style={{fontSize:'1.1rem',color:'#e6eef8',lineHeight:'1.7'}}>
          <li><b>Pick and Roll:</b> Perdeleme sonrası hücum oyuncusunun potaya gitmesi.</li>
          <li><b>Zone Defense:</b> Alan savunması, oyuncular belirli alanları savunur.</li>
          <li><b>Man to Man:</b> Bire bir savunma, her oyuncu rakibini tutar.</li>
          <li><b>Fast Break:</b> Hızlı hücum, savunma yerleşmeden sayı bulma.</li>
          <li><b>Isolation:</b> Bireysel hücum, en iyi oyuncuya alan açma.</li>
          <li><b>Press:</b> Tam saha baskı ile top kaybı zorlamak.</li>
        </ul>
      </section>
    </Layout>
  )
}
