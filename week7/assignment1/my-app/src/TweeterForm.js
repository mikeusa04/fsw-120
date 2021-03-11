import {useState} from "react";

function TweeeterForm({addTweeter}) {
    const [errorMessage, setErrorMessage] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( text === "") {
            setErrorMessage("Please add your text in the box");
            return;
        } else {
            addTweeter(text);
            setText("");
        }
    };
    const handleChange = (e) => {
        if (errorMessage) setErrorMessage("");
        setText(e.target.value);
    };

    return(
        <>
          <form className="form" onSubmit={handleSubmit}>
              <label>
                New Twitter: <br/>
                  <input
                    type="text"
                    className="input"
                    value={text}
                    onChange={(e) => handleChange(e)}
                  />
              </label>
              <button>Add</button>
          </form>
          <div className="error">{errorMessage}</div>
        </>
    );
}

export default TweeeterForm;