import { Modal, Form, Input, Button } from 'antd';
import styles from './TodoTaskModal.module.css';

type TodoTaskModalProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; description: string }) => void;
  todo: any | null;
};

export function TodoTaskModal(props: TodoTaskModalProps) {
  const { visible, onClose, onSubmit, todo } = props;
  const [form] = Form.useForm();

  const initialValues =
    (todo && { title: todo.title, description: todo.description }) || {};

  const handleAdd = () => {
    form.validateFields().then((values) => {
      onSubmit(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      title={
        <div className={styles.ModalTitle}>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={handleAdd}>
            {todo ? 'Edit' : 'Add'}
          </Button>
        </div>
      }
      open={visible}
      footer={null}
      closable={false}
      onCancel={onClose}
    >
      <Form form={form} layout="vertical" initialValues={initialValues}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Title is required' }]}
        >
          <Input placeholder="Add a title..." />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea placeholder="Add a description..." />
        </Form.Item>
      </Form>
    </Modal>
  );
}
