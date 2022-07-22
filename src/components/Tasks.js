import { useState } from "react";
//import "../views/Home.css";
import React from "react";
import { I18nProvider } from "./i18n";
import translate from "./i18n/translate";
import "./Tasks.css"
const Tasks = ({ id, onDelete, task, onEdit,isDone,user }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  //const [Task, setTask] = useState(task);
  const handleComplate = () => {
    onEdit(id,task,!isDone,user)
    console.log(isDone)
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
    onEdit(id, event.target.task.value,isDone,user);
    setIsEdit(!isEdit);
  };
  const [locale, setLocale] = React.useState(localStorage.getItem("locale"));

  return (
    <I18nProvider locale={locale}>
    <div>
      <div className="kart">
        {isEdit ? (
          <form onSubmit={handleOnEditSubmit} className="edit-task">
            <input placeholder="Task" name="task" defaultValue={task} />
            <button onSubmit={handleOnEditSubmit}>Save</button>
          </form>
        ) : (
          <div className="task">
            <span className="task-text" style={{textDecoration: isDone?"line-through":"none"}}>{task}</span>
            <div  className="control_buttons">
            <button className="edit-button" onClick={handleEdit}><p className="button-text">{translate("edit-button")}</p></button>
            <button className="complate-button" onClick={handleComplate}><p className="button-text">{translate("complate-button")}</p></button>
            <button className="delete-button" onClick={handleDelete}><p className="button-text">{translate("delete-button")}</p></button>
            </div>
          </div>
        )}
      </div>
    </div>
    </I18nProvider>
  );
};
export default Tasks;
