export const enableAutoScrollRestoration = () => {
  window.history.scrollRestoration = "auto";
};

export const scrollToTop = () => {
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
};

export const scrollToTopAndEnableAutoScrollRestoration = () => {
  scrollToTop();
  setTimeout(() => {
    enableAutoScrollRestoration();
  }, 300);
};
