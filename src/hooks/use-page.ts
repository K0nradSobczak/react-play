import { useQuery } from "@tanstack/react-query";
import axios from "axios"

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  page: number;
  pageSize: number;
}

const usePage = (query: PostQuery) => {
  const fetchPosts = () =>
    axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
      params:{
        _start: (query.page - 1) * query.pageSize,
        _limit: query.pageSize
      }
    })
    .then(res => res.data);

  return useQuery<Post[], Error>({
    queryKey: ["post", query] ,
    queryFn: fetchPosts,
    staleTime: 3 * 100_000,
    keepPreviousData: true
  })
}

export default usePage;
