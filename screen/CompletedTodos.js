import React from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { useSelector } from "react-redux";
import Todo from "../components/Todo";

const CompletedTodos = () => {
  const completeed = useSelector((state) => state.CompletedTodos);
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content titleStyle={{ color: "white" }} title="Completed" />
      </Appbar.Header>
      {completeed &&
        completeed.map((todo) => (
          <View key={todo.title}>
            <Todo
              title={todo.title}
              desc={todo.desc}
              time={todo.time}
              priority={todo.priority}
              completed="true"
            />
          </View>
        ))}
    </View>
  );
};

export default CompletedTodos;
