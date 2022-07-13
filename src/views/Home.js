import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../components/stores/Log";
import Tasks from "../components/Tasks";
import "./Home.css";
const Home = ({ setIsLog }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(logout());
          setIsLog("false");
        }}
      >
        Çıkış Yap
      </button>
      <div className="add-group">
        <TextField id="outlined-basic" label="Todo Header" variant="outlined" />
        <button className="task-add"> Add </button>
      </div>

      <div>
        <Tasks></Tasks>
      </div>
    </div>
  );
};
export default Home;
