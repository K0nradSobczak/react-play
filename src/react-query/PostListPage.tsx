import React, { useState } from 'react'
import usePage from '../hooks/use-page';

function PostListPage() {
  const pageSize: number = 10;
  const [page, setPage] = useState<number>(1);
  const {data: posts, error, isLoading} = usePage({page, pageSize});

  if (isLoading) return <p>{"Loading...."}</p>
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button className='btn btn-primary' disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
      <button className='btn btn-primary' onClick={() => setPage(page + 1)}>Next</button>

    </>
  );
}

export default PostListPage