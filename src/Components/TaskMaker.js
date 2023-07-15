import PropTypes from "prop-types";
import TaskShape from "./TaskShape";
//import IndexBar from "../../components/IndexBar";
//import ArticleShape from "../components/ArticleShape";
//import Article from "../../components/Article";
import TaskCreation from "./TaskCreation";
//import { useRouter } from "next/router";

export default function TaskMaker({
  Tasks,
  setTasks,
}) {
//   const router = useRouter();

  console.log(Tasks.length)

  const complete = (task) => {
    if (task) {
      console.log("Sartaj")
      if (Tasks.length > 0)
      {
        console.log("Singh")
        let maxID = Tasks[0].id;
        for (let i = 0; i < Tasks.length; i++) {
          if (Tasks[i].id >= maxID) {
            maxID = Tasks[i].id + 1;
            console.log("in for loop")
          }
        }
        task.id = maxID;
        console.log("max: " + maxID)
        setTasks([...Tasks, task]);
      }
      else
      {
        task.id = 0;
        setTasks([task]);
      }
      //article = {maxID, ...article};
    } 
    else {
      //router.back();
    }

  };

  console.log(Tasks.length)
  console.log(Tasks[0])
  console.log(Tasks)

  return (
    <>
      <TaskCreation
        //article={article}
        //setCurrentArticle={setCurrentArticle}
        //task={task}
        complete={complete}
      />
    </>
  );
}

TaskMaker.propTypes = {
  Tasks: PropTypes.arrayOf(TaskShape).isRequired,
  setTasks: PropTypes.func.isRequired,
};
