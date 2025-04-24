export const getNextPageParam = (currentPage: number, totalPages: number) => {
  // 현재 페이지가 총 페이지 수보다 작은 경우 다음 페이지 번호를 반환
  if (currentPage < totalPages) {
    return currentPage + 1;
  }
  return undefined; // 마지막 페이지인 경우 undefined 반환
};

// getNextPageParam(lastPage?.data?.currenPage ?? 0, lastPage?.data?.totalPages ?? 0),
