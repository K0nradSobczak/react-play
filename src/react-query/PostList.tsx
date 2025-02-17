import { useState } from 'react';
import usePosts from '../hooks/use-posts';



const PostList = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const {data: posts, error, isLoading} = usePosts(userId);

  if (isLoading) return <p>{"Loading...."}</p>
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select onChange={(event) => setUserId(parseInt(event.target.value))} title="users"className='form-select mb-3'>
        <option value=""></option>
        <option value="1">User1</option>
        <option value="2">User2</option>
      </select>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
