import React from "react";
import { LEVELS } from "../../models/levels.enum";
import {Task} from "../../models/task.class"
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask = new Task('Example', 'Default Description', true, LEVELS.NORMAL);
  return (
  <div>
Your Tasks:<TaskComponent task={defaultTask}></TaskComponent>
hola
  </div>
  );
};

export default TaskListComponent;
