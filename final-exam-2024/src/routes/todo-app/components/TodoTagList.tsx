import { Button } from 'antd';
import styles from './TodoTagList.module.css';
import { DeleteOutlined } from '@ant-design/icons';
import { TagType } from './TodoTagType';

type TodoTagListProps = {
  tags: TagType[];
  onDeleteTag: (id: number) => void;
};

export function TodoTagList(props: TodoTagListProps) {
  const { tags, onDeleteTag } = props;

  return (
    <div className={styles.TagList}>
      {tags.map((tag) => (
        <div key={tag.id} className={styles.TagItem}>
          <span
            className={styles.TagColor}
            style={{ backgroundColor: tag.color }}
          />
          <span className={styles.TagName}>{tag.name}</span>
          <span className={styles.TagCount}>({tag.count})</span>
          <Button
            icon={<DeleteOutlined />}
            type="text"
            onClick={() => onDeleteTag(tag.id)}
          />
        </div>
      ))}
    </div>
  );
}
