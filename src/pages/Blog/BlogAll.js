import { useEffect, useState } from "react";

function BlogAll() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
      })
  }, [])

  return (
    <>
      {posts && (
        <ul>
          {
            posts.map(item => (
              <li key={item.id}>{item.title}</li>
            ))
          }
        </ul>
      )}
    </>
  );
}

export default BlogAll;