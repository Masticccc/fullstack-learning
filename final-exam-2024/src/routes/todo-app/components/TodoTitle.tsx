import { Typography } from 'antd';
import styles from './TodoTitle.module.css';

type TodoTitleProps = {};

const { Title } = Typography;

export function TodoTitle(props: TodoTitleProps) {
  return <Title level={2}>todo</Title>;
}
