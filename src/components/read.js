//
import { useEffect, useState } from "react";
//Importing the 'Books' component from the "./books" file
import Books from "./books";
//
import axios from "axios";

//Component
function Read() {

    //React hook called useState
    const [data, setData] = useState([]);
    

    //React hook called useeffect
    //this going to go off and talk http for us using axios
    useEffect(
        () => {
            //Asynchronous web development
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')//this a promise "result of an operation"

                //what do we want to do with the http response; 
                .then(
                    (response) => {
                        setData(response.data.books);    
                    }
                )

                //if it came back with an error or something code asks what we want him to do with that .
                .catch()
        }, []//empty array to stop this to repeat it over and ver
    );

    return (
        <div>
            <h3>THIS IS Read Component</h3>
            {/* Passing 'data' as 'myBooks' prop */}
            <Books myBooks={data}></Books>{ /* <books> is a child to read books is embeded in read component */}
        </div>
    )// writing the visual piece of this component

}

//This command allows us to import this function somewhere else
export default Read;