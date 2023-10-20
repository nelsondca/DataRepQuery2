//Importing the React hooks
import { useEffect, useState } from "react";
//Importing the 'Books' component from the "./books" file
import Books from "./books";
//Importing axios library for making HTTP requestes
import axios from "axios";

//Component
function Read() {

    //React hook called useState to manage 'data' state
    const [data, setData] = useState([]); //this 'data' will store an array of books


    //React hook
    //This is used to make asynchronous HTTP requestes using Axios
    useEffect(
        () => {
            //Asynchronous web development
            //Axios makes an HTTP GET request to the URL
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')//this returns a promise "result of an operation"

                //what do we want to do with the http response; 
                .then(
                    //When the request is successful, update the 'data' state with the books data recieved
                    (response) => {
                        setData(response.data.books);
                    }
                )

                //if it came back with an error or something code asks what we want him to do with that .
                .catch()//handling errors here
        }, []//Empty array as the second argument to useEffect to run this only once
    );

    return (
        <div>
            <h3>THIS IS Read Component</h3>
            {/* Passing 'data' as 'myBooks' prop tot the 'Books' component */}
            <Books myBooks={data}></Books>{ /* <books> is a child to read books is embeded in read component */}
        </div>
    )// writing the visual piece of this component

}

//This command allows us to import this function somewhere else
export default Read;