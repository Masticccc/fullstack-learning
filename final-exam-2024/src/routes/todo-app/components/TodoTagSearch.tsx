import { Input } from 'antd';
import styles from './TodoTagSearch.module.css';

type TodoTagSearchProps = {
  onSearch?: (value: string) => void;
};

export function TodoTagSearch(props: TodoTagSearchProps) {
  const { onSearch } = props;
  return (
    <div className={styles.TagSearchContainer}>
      <Input
        placeholder="Search for tags..."
        onChange={(e) => onSearch?.(e.target.value)}
      />
    </div>
  );
}
