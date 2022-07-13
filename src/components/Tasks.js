import { IconButton } from "@mui/material";
import { Button } from "semantic-ui-react";

const Tasks = () => {
  return (
    <div>
      <div className="kart">
        Görev<Button.Group>
          <Button icon="play" />
          <Button icon="check" />
          <Button icon="edit" />
        </Button.Group>
      </div>
    </div>
  );
};
export default Tasks;
