import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import posts from '../data/posts'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Gürhan Savaş Akdağ - Blog</title>
        <meta name="description" content="Basit Next.js blog sitesi" />
      </Head>

      <section className="hero">
        <h1>Gürhan Savaş Akdağ</h1>
        <p className="lead">13 yaşındayım — Kodlama ve kısa yazılar</p>
      </section>

      <section className="posts">
        {posts.map((p) => (
          <Link key={p.slug} href={`/posts/${p.slug}`}>
            <PostCard post={p} />
          </Link>
        ))}
      </section>
    </Layout>
  )
}
