import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { markCompleted } from "../components/Redux/Todos/todosAction";

const Todo = ({ title, desc, time, priority, completed }) => {
  const dispatch = useDispatch();

  return (
    <View
      style={
        completed
          ? { ...styles.container, backgroundColor: "#88CF4B" }
          : { ...styles.container, backgroundColor: "#ea514c" }
      }
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            {title}
          </Text>
          <Text style={{ color: "white" }}>{desc}</Text>
        </View>
        <View>
          {priority ? (
            <MaterialIcons name="priority-high" size={24} color="white" />
          ) : null}
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white" }}>{time.slice(16, 21)}</Text>
          <Text style={{ color: "white" }}>{time.slice(0, 15)}</Text>
        </View>
      </View>
      <View
        style={{ backgroundColor: "white", borderRadius: 20, marginTop: 20 }}
      >
        {completed ? null : (
          <Button
            onPress={
              () => null
              // dispatch(
              //   markCompleted({
              //     title,
              //     desc,
              //     priority,
              //     time,
              //     // completed: true,
              //   })
              // )
            }
          >
            Mark As Completed
          </Button>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 20,
    width: "90%",
    borderRadius: 20,
  },
});
export default Todo;
