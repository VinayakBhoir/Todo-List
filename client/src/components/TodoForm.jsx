import { useState } from "react"



const TodoForm = () => {

    const [text, setText] = useState("");

    const onFromSubmit = () => {}
    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return(
        <form className="form" onSubmit={onFromSubmit}>
            <input 
            type="text" 
            placeholder="Enter new todo..."
            className="input"
            onChange={onInputChange}
            />
        </form>
    );
}


export default TodoForm;