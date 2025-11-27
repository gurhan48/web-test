import Layout from '../../components/Layout'
import posts from '../../data/posts'
import Head from 'next/head'

export async function getStaticPaths() {
  const paths = posts.map((p) => ({ params: { slug: p.slug } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug) || null
  return { props: { post } }
}

export default function PostPage({ post }) {
  if (!post) return <Layout>Yazı bulunamadı.</Layout>

  return (
    <Layout>
      <Head>
        <title>{post.title} — Gürhan'ın Blogu</title>
      </Head>

      <article className="post">
        <h1>{post.title}</h1>
        <p className="meta">{post.date} • {post.author}</p>
        <div className="content">{post.content}</div>
      </article>
    </Layout>
  )
}
