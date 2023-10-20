import { useState } from "react";

//Writing a create component
function Create() {

    //Using react hook useState to manage input values from the user
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');

    //Funciton to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();//Preveent the default  form submission behaviour

        //Loggind the values to the console
        console.log("Title:" + title + "\nAuthor:" + author + "\ncover:" + cover);
    }

    return (
        <div>
            <h3>THIS is Create Component</h3>

            {/* form of type submit to add a new book*/}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                {/* form of type submit to add a new title*/}
                <div className="form-group">
                    <label>Add Author title: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>

                {/* form of type submit to add a new cover*/}
                <div className="form-group">
                    <label>Add book cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div>
                    {/*Adding a Add button*/}
                    <input type="submit" value="Add Book" ></input>
                </div>


            </form>
        </div>
    )// writing the visual piece of this component
}
//This command allows us to import this function somewhere else making this componenet available for use in other parts of the application
export default Create;