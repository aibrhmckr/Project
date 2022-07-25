import { useState } from "react";
//import "../views/Home.css";
import React from "react";
import { I18nProvider } from "./i18n";
import translate from "./i18n/translate";
import "./Tasks.css";
import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
const Tasks = ({ id, onDelete, task, onEdit, isDone, user }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  //const [Task, setTask] = useState(task);
  const handleComplate = () => {
    onEdit(id, task, !isDone, user);
    console.log(isDone);
  };

  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    console.log("handleEdit çalıştı");
    console.log(id, task);
    setIsEdit(!isEdit);
  };
  const handleOnEditSubmit = (event) => {
    event.preventDefault();
    console.log("handleOnEditSubmit çalıştı");
    onEdit(id, event.target.task.value, isDone, user);
    setIsEdit(!isEdit);
  };
  const [locale, setLocale] = React.useState(localStorage.getItem("locale"));

  return (
    <I18nProvider locale={locale}>
      <div>
        <div className="kart">
          {isEdit ? (
            <form onSubmit={handleOnEditSubmit} className="edit-task">
              <input className="edit-input" placeholder="Task" name="task" defaultValue={task} />
              <button className="edit-save" onSubmit={handleOnEditSubmit}>{translate("save-button")}</button>
            </form>
          ) : (
            <div className="task">
              <span
                className="task-text"
                style={{ textDecoration: isDone ? "line-through" : "none" }}
              >
                {task}
              </span>
              <div className="control_buttons">
                <button className="edit-button" onClick={handleEdit}>
                  <p className="button-text">{translate("edit-button")}</p>
                </button>
                {/* <Fab color="secondary" aria-label="edit" size="small">
                  <EditIcon onClick={handleEdit} />
                </Fab> */}

                <button className="complate-button" onClick={handleComplate}>
                  <p className="button-text">{translate("complate-button")}</p>
                </button>
                {/* <Fab color="secondary" aria-label="edit" size="small">
                  <DoneIcon onClick={handleComplate} />
                </Fab> */}

                <button className="delete-button" onClick={handleDelete}>
                  <p className="button-text">{translate("delete-button")}</p>
                </button>
                {/* <Fab color="secondary" aria-label="edit" size="small">
                  <DeleteIcon onClick={handleDelete} />
                </Fab> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </I18nProvider>
  );
};
export default Tasks;
