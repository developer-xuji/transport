import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.navItem}>任务登记</div>
      <div className={styles.navItem}>当前任务</div>
    </div>
  );
};

export default Header;
