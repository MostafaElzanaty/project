import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [note, setNote] = useState("");

  let updateNote = async () => {
    fetch(`/api/note/${id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };  


  let createNote = async () => {
    fetch(`/api/note/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };



  let deleteNote = async () => {
    fetch(`/api/note/${id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    history.push('/')
    window.location.reload()

  }


  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await fetch(`/api/note/${id}/`);
        const data = await response.json();
        setNote(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNote();
  }, [id]);




  const handleSubmit = () => {

    if (id !== 'new' && !note.body){
      deleteNote()
    }
    else if (id !== 'new') {
      updateNote();
    }
    else if (id == 'new' && note.body !== null) {
      createNote()
    }
    history.push("/");
    window.location.reload() 
  };



  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
          {id !== 'new' ? (
            <button onClick={deleteNote}>Delete</button>
          ):(
            <button onClick={handleSubmit}>Done</button>
          )}
      </div>
      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        defaultValue={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
