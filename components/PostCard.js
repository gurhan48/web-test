export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <h3>{post.title}</h3>
      <p className="excerpt">{post.excerpt}</p>
      <p className="meta">{post.date} • {post.author}</p>
    </article>
  )
}
