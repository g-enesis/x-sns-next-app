import Main from "@/app/(beforeLogin)/_components/main";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "홈페이지 | 연습용",
};

const Page = () => {
  return (
    <Suspense fallback={null}>
      <Main />
    </Suspense>
  );
};
export default Page;
