//import ArticleShape from "./ArticleShape";
import PropTypes from "prop-types";
//import styles from "../styles/Editor.module.css";
import { useState } from "react";
import TaskShape from "./TaskShape";

export default function TaskCreation({ task, complete }) {
  const [name, setName] = useState(task ? task.name : "");
  const [description, setDescription] = useState(task ? task.description : "");

  function SaveButton() {
    const currentDate = new Date();

    const currDateString = currentDate.toISOString();

    console.log("Hello")

    complete({
      ...task,
      name: name,
      description: description,
      created: currDateString,
    });
    console.log("Task?")
  }

  function CancelButton() {
    complete();
  }

  return (
    <div>
      <label>
        Name:{" "}
        <input
          type="text"
          id="titlebox"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Description:
        <br />
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows={20}
          cols={60}
        />
      </label>
      <hr />

      <button
        type="sumbit"
        id="savebutton"
        onClick={SaveButton}
        disabled={!name}
      >
        Save
      </button>
      <button onClick={CancelButton}>Cancel</button>
    </div>
  );
}

TaskCreation.propTypes = {
  complete: PropTypes.func.isRequired,
  task: TaskShape,
};