import React, { useState } from "react";
import { View, FlatList } from "react-native";
import {
  Appbar,
  Modal,
  Text,
  Button,
  TextInput,
  Checkbox,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../components/Redux/Todos/todosAction";
import Todo from "../components/Todo";

const time = Date();

const AllTodos = () => {
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setPriorityy(false), setTitle(""), setDesc(""), setVisible(true);
  };
  const hideModal = () => {
    setVisible(false), setTitle(""), setDesc(""), setPriorityy(false);
  };

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriorityy] = useState(true);

  const handleSubmit = (value) => {
    dispatch(addTodos(value));
    setVisible(false);
  };

  const todos = useSelector((state) => state.Todos);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content titleStyle={{ color: "white" }} title="All Todos" />
        <Appbar.Action icon="plus" color="white" onPress={showModal} />
      </Appbar.Header>
      {todos &&
        todos.map((todo) => (
          <View key={todo.title}>
            <Todo
              title={todo.title}
              desc={todo.desc}
              time={todo.time}
              priority={todo.priority}
              completed={todo.completed}
            />
          </View>
        ))}
      <Modal
        visible={visible}
        contentContainerStyle={{ backgroundColor: "white" }}
        onDismiss={hideModal}
      >
        <View style={{ paddingHorizontal: 50 }}>
          <TextInput
            label="Todo Title"
            placeholder="Todo Title"
            style={{ marginVertical: 20 }}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <TextInput
            label="Description"
            placeholder="Description"
            multiline
            numberOfLines={3}
            style={{ marginVertical: 20 }}
            value={desc}
            onChangeText={(text) => setDesc(text)}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>High Priority</Text>
            <Checkbox
              color="#ea514c"
              status={priority ? "checked" : "unchecked"}
              onPress={() => {
                setPriorityy(!priority);
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            justifyContent: "space-between",
            paddingHorizontal: 50,
          }}
        >
          <Button onPress={hideModal}>Cancel</Button>
          <Button
            onPress={() =>
              handleSubmit({ title, desc, priority, time, completed: false })
            }
          >
            Submit
          </Button>
        </View>
      </Modal>
    </View>
  );
};

export default AllTodos;
