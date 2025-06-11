// App.js

import postsData from "../../utils/PostData"
import PostCard from "./PostCard";

export default function BlogPosts() {
  return (
    <div className="main-container">
      <h2>Blog Posts </h2>
      {postsData.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
