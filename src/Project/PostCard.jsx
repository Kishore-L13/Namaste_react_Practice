// PostCard.js
//👍 likes | 👎 dislikes | 👁️ views
export default function PostCard({title,body,tags,reactions,views}) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{body}</p>
      <div className="tags">
        {tags.map((tag, idx) => (
          <span key={idx}>#{tag}</span>
        ))}
      </div>
      <div className="meta">
        <p>👍 {reactions.likes} | 👎 {reactions.dislikes}|👁️ {views}views</p>
      </div>
    </div>
  );
}
