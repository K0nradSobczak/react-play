import { useQuery } from "@tanstack/react-query";
import axios from "axios"

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (userId: number | null) => {
  const fetchPosts = () =>
    axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
      params:{
        userId
      }
    })
    .then(res => res.data);

  return useQuery<Post[], Error>({
    queryKey: userId? ["users", userId,"post"] : ["post"],
    queryFn: fetchPosts,
    staleTime: 3 * 100_000
  })
}

export default usePosts;
