"use client";

import Main from "@/app/(beforeLogin)/_components/main";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/i/flow/login", {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Main />
    </>
  );
};
export default LoginPage;
