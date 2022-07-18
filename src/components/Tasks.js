import { IconButton } from "@mui/material";
import { useState } from "react";
import { Button } from "semantic-ui-react";
import "../views/Home.css";

const Tasks = ({ id, onDelete, task, onEdit }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  //const [Task, setTask] = useState(task);
  const handleComplate = (event) => {
    // if (event.target.style.textDecoration) {
    //   event.target.style.removeProperty("text-decoration");
    //   //setTask(event.target.style.removeProperty('text-decoration'))
    // } else {
    //   event.target.style.setProperty("text-decoration", "line-through");
    //   setTask(Task.strike());
    //   console.log(Task);
    // }
  };

  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    console.log("handleEdit çalıştı")
console.log(id,task)
    setIsEdit(!isEdit);
  };
  const handleOnEditSubmit = (event) => {
    event.preventDefault();
    console.log("handleOnEditSubmit çalıştı")
    onEdit(id, event.target.task.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      <div className="kart">
        {isEdit ? (
          <form onSubmit={handleOnEditSubmit}>
            <input placeholder="Task" name="task" defaultValue={task} />
            <button onSubmit={handleOnEditSubmit}>Save</button>
          </form>
        ) : (
          <div className="button-group">
            <span>{task}</span>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleComplate}>Complete</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Tasks;
