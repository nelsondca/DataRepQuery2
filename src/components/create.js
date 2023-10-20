import { useState } from "react";

//Writing a create component
function Create() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log("Title:" + title + "\nAuthor:" + author + "\ncover:" + cover);
    }

    return (
        <div>
            <h3>THIS is Create Component</h3>

            {/* form of type submit */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>


                <div className="form-group">
                    <label>Add Author title: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>


                <div className="form-group">
                    <label>Add book cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value = "Add Book" colour="blue"></input>
                </div>

               
            </form>
        </div>
    )// writing the visual piece of this component
}
//This command allows us to import this function somewhere else
export default Create;