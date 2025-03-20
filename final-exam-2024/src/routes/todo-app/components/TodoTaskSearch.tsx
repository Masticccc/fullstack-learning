import { Input } from 'antd';
import styles from './TodoTaskSearch.module.css';

type TodoTaskSearchProps = {
  onSearch?: (value: string) => void;
};

export function TodoTaskSearch(props: TodoTaskSearchProps) {
  const { onSearch } = props;
  return (
    <div className={styles.MainContainer}>
      <Input
        className={styles.InputContainer}
        placeholder="Search for todo's..."
        onChange={(e) => onSearch?.(e.target.value)}
      />
    </div>
  );
}
