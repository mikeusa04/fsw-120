import {useState} from "react";

function Tweeter({tweeter, completeTweeter, deleteTweeter, editTweeter}) {
    const[edit, setEdit] = useState(false);
    const [text, setText] = useState(tweeter.text);

    const toggleEdit = () => {
        setEdit(!edit);
    };

    const handleEdit = (e) => {
        setText(e.target.value);
    };

    const handleUpdate = (id, text) => {
        editTweeter(id, text);
        toggleEdit();
    };
    return(
        <li>
            <input
               type="checkbox"
               checked={tweeter.isCompleted}
               onChange={() => completeTweeter(tweeter.id)}
            />

            {!edit ? (
                <>
                  <span
                     style={{textDecoration: tweeter.isCompleted ? "line-through" : ""}}
                  >
                      {" "}
                      {tweeter.text}{" "}
                  </span>
                  <button onClick={() => deleteTweeter(tweeter.id)}>Delete</button>
                  <button onClick={() => toggleEdit()} disabled={tweeter.isCompleted}>Edit</button>   
                </>
            ) : (
                <>
                  <input
                    type="text"
                    className="input"
                    value={text}
                    onChange={(e) => handleEdit(e)}
                  />
                  <button onClick={() => handleUpdate(tweeter.id, text)}>Update</button>
                  <button onClick={() => toggleEdit()}>Cancel</button>  
                </>
            )}   
        </li>
    );
}

export default Tweeter;