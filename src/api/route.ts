import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const FetchData = (url : string) => {
  const { data, refetch, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const res = await axios.get(url);
      console.log(res.data);
      return res.data;
    },
    refetchOnWindowFocus: false,
    enabled: false,
  });
  return { data, refetch, isFetching };
};

export default FetchData;


