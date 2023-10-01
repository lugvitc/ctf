import styles from "./errorModal.module.css";

function ErrorModal({ error, open }) {
  return (
    <dialog open={open} className={styles.modal}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Oops!</h2>
        </div>
        <div className={styles.body}>
          <p>{error}</p>
        </div>
      </div>
    </dialog>
  );
}

export default ErrorModal;

/*

    <div className={styles.modal}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Oops!</h2>
        </div>
        <div className={styles.body}>
          <p>{error}</p>
        </div>
      </div>
    </div>

*/
