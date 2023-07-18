import TaskShape from "./TaskShape";

import { useState } from "react";

export default function TaskDetails({ task }) {
  // eslint-disable-next-line no-unused-vars

  const [showMore, setShowMore] = useState(false);

  const Handler = () => {
    setShowMore(!showMore);
  };

  console.log("Deadline: " + task.deadline);
  console.log("Now: " + new Date());

  return (
    
    <ul key={task.name} data-testid="name" onClick={() => Handler()}>
        <h5>{task ? task.name + " (" + task.deadline + ") " : ""}</h5>
        <br></br>
        {showMore && task.description}
    </ul>
  );
}

TaskDetails.propTypes = {
  task: TaskShape,
};
