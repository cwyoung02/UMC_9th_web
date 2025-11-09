import { useMutation } from "@tanstack/react-query"
import { deleteLike } from "../../apis/lp"
import { queryClient } from "../../App";
import { QUERY_KEY } from "../../constants/key";

export const useDelteLike = () => {
  return useMutation({
    mutationFn: deleteLike,
    onSuccess: (data) => { // 성공하고 리스폰스 값이 data에 담겨서
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.lps, data.data.lpId],
        exact: true,
      });
    },
  });
}