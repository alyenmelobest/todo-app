import React, { useState } from "react";
import { Container, H1, Input, Button, Item, Flex, Spacer } from "./styles";

function App() {
  const [task, setTask] = useState("");
  const [listTask, setListTasks] = useState([]);

  const addTask = () => {
    if (!task) return alert('Please, add a task to continue!');
    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    };

    setListTasks([...listTask, newTask]);
    setTask("");
  };

  const deleteTask = (id) => {
    const newList = listTask.filter((task) => task.id !== id);
    setListTasks(newList);
  };

  const toggleChecked = (id, checked) => {
    const index = listTask.findIndex((task) => task.id === id);
    const newList = listTask;
    newList[index].checked = !checked;
    setListTasks([...newList]);
  };

  return (
    <Container>
      <H1>TO-DO LIST</H1>
      <Spacer />

      <Flex direction="row">
        <Input
          value={task}
          placeholder="Add a task"
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={addTask}>Add</Button>
      </Flex>
      <Spacer margin="26px" />

      <ul>
        {listTask.map((task) => (
          <>
            <Item checked={task.checked} key={task.id}>
              <p>{task.task}</p>
              <Flex direction="row">
                <button onClick={() => toggleChecked(task.id, task.checked)}>
                  <i class="bx bx-check"></i>
                </button>
                <button onClick={() => deleteTask(task.id)}>
                  <i class="bx bx-trash"></i>
                </button>
              </Flex>
            </Item>
            <Spacer margin="12px" />
          </>
        ))}
      </ul>
    </Container>
  );
}

export default App;
