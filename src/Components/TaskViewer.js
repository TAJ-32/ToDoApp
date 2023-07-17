import styles from "../styles/TasksView.module.css";
import TaskDetails from "./TaskDetails";

export default function TaskViewer({ Tasks }) {

    console.log("TaskViewer: " + Tasks)
    const tasks_list = Tasks.map((task) => (
        <TaskDetails key={task.title} task={task} />
    ))
    return (

        <div className={styles.border}>
            <h1>-----Your Tasks-----</h1>
            {tasks_list}
        </div>
    );
  }
