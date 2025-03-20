import { Card, Button, Dropdown, Menu, Checkbox } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import styles from './TodoCard.module.css';

type TodoCardProps = {
  title: string;
  description: string;
  createdAt: string;
  done: boolean;

  onEdit: () => void;
  onDelete: () => void;
  onToggleDone: () => void;
};

export function TodoCard(props: TodoCardProps) {
  const {
    title,
    description,
    createdAt,
    done,

    onEdit,
    onDelete,
    onToggleDone,
  } = props;
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={onEdit}>
        Edit
      </Menu.Item>
      <Menu.Item key="2" onClick={onDelete}>
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <Card className={`${styles.Card} ${done ? styles.DoneCard : ''}`}>
      <div className={styles.Content}>
        <span className={`${styles.Title} ${done ? styles.DoneText : ''}`}>
          {title}
        </span>
        <span className={styles.Timestamp}>{createdAt}</span>
        <p className={`${styles.Title} ${done ? styles.DoneText : ''}`}>
          {description}
        </p>
      </div>

      <div className={styles.Dropdown}>
        <Dropdown overlay={menu}>
          <Button icon={<EllipsisOutlined />} />
        </Dropdown>
      </div>

      <div className={styles.Footer}>
        <Checkbox checked={done} onChange={onToggleDone}>
          Done
        </Checkbox>
      </div>
    </Card>
  );
}
