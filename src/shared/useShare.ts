import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useShare = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPath = useCallback(() => {
    // const siteUrl = "https://...";
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const params = new URLSearchParams(searchParams);
    return `${siteUrl}${pathname}${params.size > 0 ? `?${params.toString()}` : ""}`;
  }, [pathname, searchParams]);

  const getSharePath = useCallback(
    (path?: string) => {
      const domain = global.location.origin;
      const sharePath = !path ? currentPath() : path?.includes(domain) ? path : `${domain}${path}`;
      return sharePath;
    },
    [currentPath],
  );
  return { getSharePath };
};
export default useShare;
