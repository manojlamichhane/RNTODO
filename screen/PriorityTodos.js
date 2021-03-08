import React from "react";
import { Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { useSelector } from "react-redux";
import Todo from "../components/Todo";

const PriorityTodos = () => {
  const todos = useSelector((state) => state.Todos);
  const priorityTodos = todos && todos.filter((todo) => todo.priority == true);
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content titleStyle={{ color: "white" }} title="My Priority" />
      </Appbar.Header>
      {priorityTodos &&
        priorityTodos.map((todo) => (
          <View key={todo.title}>
            <Todo
              title={todo.title}
              desc={todo.desc}
              time={todo.time}
              priority={todo.priority}
            />
          </View>
        ))}
    </View>
  );
};

export default PriorityTodos;
