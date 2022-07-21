import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../components/stores/Log";
import Tasks from "../components/Tasks";
import "./Home.css";
import { v4 as uuid } from "uuid";
import ThemeSwitch from "../components/ThemeSwitch";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as React from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import LanguageSelector from "../components/LanguageSelector";
const Home = ({ setIsLog, theme, setTheme }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const kullanici = localStorage.getItem("epost") + "#TR28";
  //let task = [];

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  //console.log(todos)
  const unique_id = uuid();
  const fetchData = async () => {
    await fetch("http://localhost:3004/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));
  };
  const onAdd = async () => {
    await fetch("http://localhost:3004/todos", {
      method: "POST",
      body: JSON.stringify({
        id: unique_id,
        user: kullanici,
        isDone: false,
        task: text,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status !== 201) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setTodos((users) => [...users, data]);
      })
      .catch((error) => console.log(error));
  };

  const onDelete = async (id) => {
    await fetch(`http://localhost:3004/todos/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          setTodos(
            todos.filter((todo) => {
              return todo.id !== id;
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };
  const onEdit = async (id, task, isDone, user) => {
    console.log("onEdit çalıştı");
    await fetch(`http://localhost:3004/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        user: user,
        task: task,
        isDone: isDone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log(85);
          return;
        } else {
          console.log(89);
          return response.json();
        }
      })
      .then((data) => {
        const updatedTodos = todos.map((todo) => {
          console.log(96);
          if (todo.id === id) {
            todo.task = task;
            todo.isDone = isDone;
          }
          return todo;
        });
        console.log(task, " ");
        setTodos((todos) => updatedTodos);
      })
      .catch((error) => console.log(error));
  };

  function InputBoxReset(inputID) {
    document.getElementById(inputID).value = "";
  }

  // const [checked, setChecked] = React.useState(true);
  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  //   console.log("Gece modu açıldı");
  // };

  let boolean;
  if (localStorage.getItem("theme") === "light") {
    boolean = false;
  } else {
    boolean = true;
  }

  return (
    <div className="screen" data-theme={theme}>
      <FormControlLabel
        control={
          <ThemeSwitch
            sx={{ m: 1 }}
            onClick={() => {
              if (theme === "light") {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
              } else {
                setTheme("light");
                localStorage.setItem("theme", "light");
              }
            }}
            defaultChecked={boolean}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="nightMode"
      />
      <button
        onClick={() => {
          dispatch(logout());
          setIsLog("false");
        }}
        className="exit-btn"
      >
        Log out
      </button>
      <LanguageSelector />
      <div className="add-group">
        <input
          label="Todo"
          id="outlined-basic"
          className="task-texfield"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        {/* <TextField
          id="outlined-basic"
          label="Todo Header"
          variant="outlined"
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="task-texfield"
        /> */}
        <button
          className="task-add"
          onClick={() => {
            if (text !== "") {
              InputBoxReset("outlined-basic");
              onAdd();
            }
          }}
        >
          Add
        </button>
      </div>
      {todos.map((user) =>
        kullanici === user.user ? (
          <Tasks
            id={user.id}
            task={user.task}
            isDone={user.isDone}
            user={user.user}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ) : (
          console.clear()
        )
      )}
    </div>
  );
};
export default Home;
