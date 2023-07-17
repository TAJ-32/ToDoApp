import TaskShape from "./TaskShape";

import { useState } from "react";

export default function TaskDetails({ task }) {
  // eslint-disable-next-line no-unused-vars

  const [showMore, setShowMore] = useState(false);

  const Handler = () => {
    setShowMore(!showMore);
  };

  return (
      <ul key={task.name} data-testid="name" onClick={() => Handler()}>
        <h5>{task.name}</h5>
        {showMore && task.description}
      </ul>
  );
}

TaskDetails.propTypes = {
  task: TaskShape,
};
