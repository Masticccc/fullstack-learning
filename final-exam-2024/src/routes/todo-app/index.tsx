import { Col, Row } from 'antd';
import styles from './index.module.css';
import { TodoAddButton } from './components/TodoAddButton';
import { TodoDeleteButton } from './components/TodoDeleteButton';
import { TodoTaskSearch } from './components/TodoTaskSearch';
import { TodoCard } from './components/TodoCard';
import { TodoTaskModal } from './components/TodoTaskModal';
import { useState } from 'react';
import { TodoTagList } from './components/TodoTagList';
import { TodoNewTagButton } from './components/TodoNewTagButton';
import { TodoTitle } from './components/TodoTitle';
import { TodoTagSearch } from './components/TodoTagSearch';
import { TodoHideDone } from './components/TodoHideDone';
import { TodoTagModal } from './components/TodoTagModal';
import { TagType } from './components/TodoTagType';

export function FinalExam() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [todos, setTodos] = useState<any[]>([]);
  const [currentTodo, setCurrentTodo] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isTagModalVisible, setIsTagModalVisible] = useState(false);
  const [hideDone, setHideDone] = useState(false);
  const [tags, setTags] = useState<TagType[]>([
    { id: 1, name: 'School', color: 'blue', count: 0 },
    { id: 2, name: 'Study', color: 'purple', count: 0 },
    { id: 3, name: 'Work', color: 'orange', count: 0 },
  ]);

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const handleCardSubmit = (data: { title: string; description: string }) => {
    if (currentTodo) {
      setTodos(
        todos.map((todo) =>
          todo.id === currentTodo.id ? { ...todo, ...data } : todo
        )
      );
    } else {
      const newTodo = {
        ...data,
        createdAt: new Date().toLocaleString(),
        id: Date.now(),
      };
      setTodos([...todos, newTodo]);
    }
    hideModal();
  };

  const showAddModal = () => {
    setCurrentTodo(null);
    setIsModalVisible(true);
  };

  const showEditModal = (todo: any) => {
    setCurrentTodo(todo);
    setIsModalVisible(true);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleDone = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      })
    );
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const notDone = hideDone ? !todo.done : true;
    return matchesSearch && notDone;
  });

  const handleTaskSearch = (value: string) => {
    setSearchQuery(value);
  };

  const handleDeleteAll = () => {
    setTodos([]);
  };

  const handleDeleteDone = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  const handleDeleteTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  const handleOpenTagModal = () => {
    setIsTagModalVisible(true);
  };

  const handleCloseTagModal = () => {
    setIsTagModalVisible(false);
  };

  const handleTagSubmit = (data: { name: string; color: string }) => {
    const newTag: TagType = {
      id: Date.now(),
      name: data.name,
      color: data.color,
      count: 0,
    };

    setTags([...tags, newTag]);
    setIsTagModalVisible(false);
  };

  const handleHideDoneToggle = () => {
    setHideDone(!hideDone);
  };

  return (
    <div className={styles.MainContainer}>
      <Row gutter={16}>
        <Col span={8}>
          <div className={styles.TagContainer}>
            <TodoTitle />
            <TodoTagSearch />
            <TodoTagList tags={tags} onDeleteTag={handleDeleteTag} />
            <TodoHideDone onClick={handleHideDoneToggle} />
            <TodoNewTagButton onClick={handleOpenTagModal} />
            <TodoTagModal
              visible={isTagModalVisible}
              onClose={handleCloseTagModal}
              onSubmit={handleTagSubmit}
            />
          </div>
        </Col>

        <Col span={16}>
          <div className={styles.TaskContainer}>
            <Row gutter={8} align="middle">
              <Col flex="auto">
                <TodoTaskSearch onSearch={handleTaskSearch} />
              </Col>
              <Col>
                <TodoDeleteButton
                  onDeleteAll={handleDeleteAll}
                  onDeleteDone={handleDeleteDone}
                />
              </Col>
              <Col>
                <TodoAddButton onOpen={showAddModal} />
              </Col>
            </Row>

            <TodoTaskModal
              visible={isModalVisible}
              onClose={hideModal}
              onSubmit={(data) => {
                handleCardSubmit({
                  title: data.title,
                  description: data.description,
                });
              }}
              todo={currentTodo}
            />

            <Row gutter={[16, 16]}>
              {filteredTodos.map((todo) => (
                <Col key={todo.id} xs={24} sm={12} md={12} lg={12} xl={12}>
                  <TodoCard
                    title={todo.title}
                    description={todo.description}
                    createdAt={todo.createdAt}
                    done={todo.done}
                    onEdit={() => showEditModal(todo)}
                    onDelete={() => handleDelete(todo.id)}
                    onToggleDone={() => handleToggleDone(todo.id)}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
