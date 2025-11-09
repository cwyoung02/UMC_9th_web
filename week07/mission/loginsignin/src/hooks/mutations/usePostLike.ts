import { useMutation } from "@tanstack/react-query"
import { postLike } from "../../apis/lp"
import { queryClient } from "../../App";
import { QUERY_KEY } from "../../constants/key";

export const usePostLike = () => {
  return useMutation({
    mutationFn: postLike,
    // data -> API 성공 응답데이터
    // variables -> mutate에 전달한 값
    // context -> onMutate에서 반환한 값
    onSuccess: (data) => { // 성공하고 리스폰스 값이 data에 담겨서
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.lps, data.data.lpId],
        exact: true,
      });
    },
    // onError: (error, variables, context) => {}, -> 실패시 실행되는 함수
    // error -> 요청 실패시 발생한 에러
    // variables -> mutate에 전달한 값
    // context -> onMutate에서 반환한 값
    // onMutate: (variables) => {}, -> 요청 직전에 실행되는 함수
    // Optimistic Update를 구현할 때 유용
    // onSettled: (data, error, variables, context) => {}, -> 요청이 끝난 후 항상 실행되는 함수
    // 로딩 상태를 초기화할 때 조금 유용하다
  });
}