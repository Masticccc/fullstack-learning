import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import styles from './TodoNewTagButton.module.css';

type TodoNewTagButtonProps = { onClick?: () => void };

export function TodoNewTagButton(props: TodoNewTagButtonProps) {
  const { onClick } = props;
  return (
    <div className={styles.MainContainer}>
      <Button onClick={onClick} type="text" icon={<PlusCircleOutlined />}>
        Add a new tag
      </Button>
    </div>
  );
}
