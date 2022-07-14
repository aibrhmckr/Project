import { IconButton } from "@mui/material";
import { Button } from "semantic-ui-react";
import "../views/Home.css"
const Tasks = () => {
  return (
    <div>
      <div className="kart">
        Görev
        <div className="button-group">
            <button>Edit</button>
            <button>Complete</button>
            <button>Delete</button>
        </div>
      </div>
    </div>
  );
};
export default Tasks;
