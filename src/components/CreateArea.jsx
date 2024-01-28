import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isExpanded,setExpanded]=React.useState(false);
  const [note,setNote]=React.useState({
    title:"",
    content:""

  });
  function handleChange(event){
    const {name,value}=event.target;
    setNote(prevNote =>{
      return {
        ...prevNote,
        [name]:value
      }

    })
  }

  function submitButton(event){
    event.preventDefault();
     props.onAdd(note);
     setNote({
      title:"",
      content:""
     })
  }

  function expand(){
    setExpanded(true);
  }
  
  return (
    <div>
      <form className="create-note">
      {  isExpanded && <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/> }
        <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3:1} onChange={handleChange} value={note.content} onClick={expand} />
        <Zoom in={isExpanded?true:false}>
        <Fab onClick={submitButton}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
