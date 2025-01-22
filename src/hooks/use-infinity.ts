import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios"

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const useInfinity = (query: PostQuery) => {
  const fetchPosts = ({pageParam = 1}) =>
    axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
      params:{
        _start: (pageParam - 1) * query.pageSize,
        _limit: query.pageSize
      }
    })
    .then(res => res.data);

  return useInfiniteQuery<Post[], Error>({
    queryKey: ["post", query] ,
    queryFn: fetchPosts,
    staleTime: 3 * 100_000,
    keepPreviousData: true,
    getNextPageParam: (lastPage,allPage) =>{
      return lastPage.length > 0 ? allPage.length + 1 : undefined;
    }
  })
}

export default useInfinity;
