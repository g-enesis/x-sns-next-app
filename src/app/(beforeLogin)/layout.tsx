import styles from "@/app/(beforeLogin)/_components/main.module.css";
import React from "react";

interface IPropsLayout {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const Layout = ({ children, modal }: IPropsLayout) => {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
};
export default Layout;
