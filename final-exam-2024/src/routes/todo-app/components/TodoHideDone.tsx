import { useState } from 'react';
import styles from './TodoHideDone.module.css';

type TodoHideDoneProps = {
  onClick?: () => void;
};

export function TodoHideDone(props: TodoHideDoneProps) {
  const { onClick } = props;
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`${styles.HideDoneContainer} ${active ? styles.Active : ''}`}
      onClick={handleClick}
    >
      <span className={styles.Indicator} />
      <span className={styles.Text}>Hide done todo's</span>
    </div>
  );
}
