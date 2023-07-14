import PropTypes from "prop-types";

const TaskShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  //deadline: PropTypes.string.isRequired,
  //completed: PropTypes.bool.isRequired,
});

export default TaskShape;