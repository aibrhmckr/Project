import { IconButton } from "@mui/material";
import { Button } from "semantic-ui-react";
import "../views/Home.css";

const Tasks = ({ id, onDelete, task }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div>
      <div className="kart">
        {task}
        <div className="button-group">
          <button>Edit</button>
          <button>Complete</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};
export default Tasks;
