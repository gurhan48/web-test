import Head from 'next/head'
import Layout from '../components/Layout'

export default function Teknikler() {
  return (
    <Layout>
      <Head>
        <title>Basketbol Teknikleri | Basketball Technicals</title>
      </Head>
      <section>
        <h2 style={{color:'#f7b32b',fontSize:'2rem',marginBottom:'18px'}}>Basketbol Teknikleri</h2>
        <ul style={{fontSize:'1.1rem',color:'#e6eef8',lineHeight:'1.7'}}>
          <li><b>Turnike:</b> Potaya yakın, sıçrayarak yapılan sayı vuruşu.</li>
          <li><b>Şut:</b> Farklı mesafelerden potaya topu atma tekniği (jump shot, set shot, fadeaway).</li>
          <li><b>Dribbling:</b> Topu yere vurarak sürme (cross-over, behind-the-back, spin move).</li>
          <li><b>Pas:</b> Chest pass, bounce pass, alley-oop gibi farklı pas türleri.</li>
          <li><b>Pivot:</b> Sabit ayak üzerinde dönerek rakipten kurtulma.</li>
          <li><b>Screen (Perdeleme):</b> Takım arkadaşına alan açmak için yapılan engelleme.</li>
        </ul>
      </section>
    </Layout>
  )
}
