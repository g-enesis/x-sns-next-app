// webivew 화면 여부
export const isWebview = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return /android|webos|iphone|ipad|ipod|blackberry|windows phone|/.test(userAgent);
};
