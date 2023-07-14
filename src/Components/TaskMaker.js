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

  const complete = (task) => {
    if (task) {
      let maxID = Tasks[0].id;
      for (let i = 0; i < Tasks.length; i++) {
        if (Tasks[i].id > maxID) {
          maxID = Tasks[i].id + 1;
        }
      }
      //article = {maxID, ...article};
      task.id = maxID;

      setTasks([task, ...Tasks]);
    } 
    else {
      //router.back();
    }
  };

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
