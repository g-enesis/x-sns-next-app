import styles from "@/app/(beforeLogin)/_components/main.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <>
      <div className={styles.left}>
        <div className={styles.mainLogoGroup}>
          <Image
            src={"/kw.jpeg"}
            width={250}
            height={250}
            alt="logoImg"
            style={{ borderRadius: "50%" }}
          />
          <div>연습용 프로젝트 입니다.</div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.authButtonGroup}>
          <Link href={"/i/flow/signup"} className={styles.link}>
            계정만들기
          </Link>
          <Link href={"/login"} className={styles.link}>
            로그인
          </Link>
        </div>
      </div>
    </>
  );
}
