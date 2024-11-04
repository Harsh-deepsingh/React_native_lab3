import { SafeAreaView } from "react-native-safe-area-context";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

const index = () => {
  const tasks = ["Do laundry", "Go to gym", "Walk dog", "testing"];
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
};

export default index;
