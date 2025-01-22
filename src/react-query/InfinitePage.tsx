import React from 'react';
import useInfinity from '../hooks/use-infinity';

function InfinityPage() {
  const pageSize: number = 10;
  const {data: posts, error, isLoading, fetchNextPage, isFetchingNextPage} = useInfinity({pageSize});

  if (isLoading) return <p>{"Loading...."}</p>
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts.pages.map((page) => (
          <React.Fragment>
              {page.map((post) => (
                <li key={`${post.id}`} className="list-group-item">
                {post.title}
              </li>
              ))}
          </React.Fragment>
        ))}
      </ul>
      <button className='btn btn-primary' disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>Load More</button>

    </>
  );
}

export default InfinityPage