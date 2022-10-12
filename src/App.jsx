import React from "react";
import { Container, H1, Input, Button, Item, Flex, Spacer } from "./styles";

import { useState } from "react";

function App() {
  const { task, setTask } = useState("");
  const { listTask, setListTasks } = useState([
    {
      id: 1,
      task: "Estudar React",
      checked: true,
    },
    {
      id: 2,
      task: "Estudar JavaScript",
      checked: false,
    },
  ]);

  return (
    <Container>
      <H1>TO-DO LIST</H1>
      <Spacer />

      <Flex direction="row">
        <Input placeholder="Add a task"/>
        <Button>Add</Button>
      </Flex>
      <Spacer margin="26px" />

      <ul>
        {listTask.map((task) => (
          <>
            <Item checked={task.checked} key={task.id}>
              <p>{task.task}</p>
              <Flex direction="row">
                <button>
                  <i class="bx bx-check"></i>
                </button>
                <button>
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
