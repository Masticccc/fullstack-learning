import { Button, Dropdown, MenuProps, message } from 'antd';
import { DeleteOutlined, DownOutlined } from '@ant-design/icons';
import styles from './TodoDeleteButton.module.css';

type TodoDeleteButtonProps = {
  onDeleteAll?: () => void;
  onDeleteDone?: () => void;
};

export function TodoDeleteButton(props: TodoDeleteButtonProps) {
  const { onDeleteAll, onDeleteDone } = props;
  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === '1' && onDeleteAll) {
      onDeleteAll();
      message.info('Delete all');
    } else if (key === '2' && onDeleteDone) {
      onDeleteDone();
      message.info('Delete done');
    }
  };

  const items: MenuProps['items'] = [
    {
      label: 'Delete all',
      key: '1',
    },
    {
      label: 'Delete done',
      key: '2',
    },
  ];

  return (
    <div className={styles.MainContainer}>
      <Dropdown menu={{ items, onClick }} trigger={['click']} arrow>
        <Button danger>
          <DeleteOutlined /> <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}
