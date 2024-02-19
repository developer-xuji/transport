import React from "react";
import styles from "../styles/PageCurrent.module.css";

const PageCurrent: React.FC = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.info}>
        <div>司机姓名: 张三</div>
        <div>司机编号: 001</div>
      </div>
      <div className={styles.info}>
        <div>车辆牌号: 冀A12345</div>
      </div>
      <div className={styles.info}>
        <div>集装箱编号: 12345</div>
        <div>船名: </div>
        <div>品名: </div>
        <div>火车列次: </div>
        <div>重量: </div>
      </div>
    </div>
  );
};

export default PageCurrent;
