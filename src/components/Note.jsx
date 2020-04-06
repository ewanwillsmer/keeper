import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  // passes the id of the clicked on note, to the function in App.js which deletes the note
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
