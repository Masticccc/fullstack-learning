import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './TodoAddButton.module.css';

type TodoAddButtonProps = {
  onOpen: () => void;
};

export function TodoAddButton(props: TodoAddButtonProps) {
  const { onOpen } = props;
  return (
    <div className={styles.MainContainer}>
      <Button type="primary" icon={<PlusOutlined />} onClick={onOpen}>
        Add
      </Button>
    </div>
  );
}
