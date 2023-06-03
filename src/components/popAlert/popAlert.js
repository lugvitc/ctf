import React, { useState, useEffect } from 'react';
import styles from './popalert.module.css';

const PopAlert = ({ message, duration, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <>
      {visible && (
        <div className={`${styles.pop_alert} ${visible ? styles.visible : styles.hidden}`}>
          <div className={styles.pop_alert_content}>
            <span className={styles.pop_alert_message}>{message}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default PopAlert;
