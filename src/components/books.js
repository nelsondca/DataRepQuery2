import BookItem from "./bookItem";
//new component
//props give access to any data
function Books(props) {//standard for properties

    return props.myBooks.map(//map function will put out a indvidual object
        (book) => {
            return <BookItem myBook={book} key ={book.isbn}></BookItem>
        }
    );
    //this will perform same operation on each elemet of the array

    // writing the visual piece of this component
}

export default Books;