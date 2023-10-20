//Importing 'BookItem' component from the "./bookItem" file
import BookItem from "./bookItem";
//new component
//This component recieves 'props', giving acces to any data
function Books(props) {//  props means standard for properties

    //This function takes an arary of 'myBooks' from props and uses the map function
    //to process each book in the array and create a 'BookItem' component for each.
    
    return props.myBooks.map(//map function will put out a indvidual object
        (book) => {
            //For each book in the array, create a 'bookItem' component.
            //Pass the book object as 'myBook' prop and use 'book.isbn' as unique identfier
            return <BookItem myBook={book} key={book.isbn}></BookItem>
        }
    );
    //this will perform same operation on each elemet of the array

    // writing the visual piece of this component
}
//Exporting the 'books' component making it available in other parts of the application
export default Books;