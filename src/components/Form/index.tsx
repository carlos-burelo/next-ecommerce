import styles from "./Form.module.css";

interface Props {
  Info1: string;
  Info2: string;
}

export default function Form(props: Props) {
  const { Info1, Info2 } = props;

  return (
    <div className={styles.contenedor}>
      <div className={styles.cajaInfo}>
        <span className={styles.Info1}>{Info1}</span>
        <span className={styles.Info2}>{Info2}</span>
      </div>
      <div className={styles.cajaInput}>
        <input type="text" />
        <input type="text" />
      </div>
    </div>
  );
}
