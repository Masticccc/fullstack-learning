import { Modal, Form, Input, Button } from 'antd';
import { useState } from 'react';
import styles from './TodoTagModal.module.css';

type TodoTagModalProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; color: string }) => void;
};

const colorOptions = [
  'blue',
  'purple',
  'gray',
  'pink',
  'orange',
  'green',
  'yellow',
  'red',
  'lightblue',
  'beige',
];

export function TodoTagModal(props: TodoTagModalProps) {
  const { visible, onClose, onSubmit } = props;
  const [form] = Form.useForm();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleAdd = () => {
    form.validateFields().then((values) => {
      onSubmit(values);
      form.resetFields();
      setSelectedColor(null);
    });
  };

  return (
    <Modal
      title={
        <div className={styles.ModalTitle}>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={handleAdd}>
            Add
          </Button>
        </div>
      }
      open={visible}
      footer={null}
      closable={false}
      onCancel={onClose}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Title"
          name="name"
          rules={[{ required: true, message: 'Title is required' }]}
        >
          <Input placeholder="add a title..." />
        </Form.Item>

        <Form.Item
          label="Colors"
          name="color"
          rules={[{ required: true, message: 'Colors is required' }]}
        >
          <div className={styles.colorContainer}>
            {colorOptions.map((colorValue) => {
              const isSelected = selectedColor === colorValue;
              return (
                <div
                  key={colorValue}
                  className={styles.colorCircle}
                  style={{
                    backgroundColor: colorValue,
                    filter: (isSelected && 'none') || 'opacity(0.6)',
                  }}
                  onClick={() => {
                    setSelectedColor(colorValue);
                    form.setFieldsValue({ color: colorValue });
                  }}
                />
              );
            })}
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
}
