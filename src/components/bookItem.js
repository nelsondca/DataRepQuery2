//Importing "Card" component from the "react-bootstrap" library
import Card from 'react-bootstrap/Card';


//New Component
//This component is Granchild of "Read" component
function BookItem(props) {

  return (
    //Bootstrap card component
    <Card>
      <Card.Header>{props.myBook.title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* Displaying an image with the book's thumbnail URL */}
          <img src={props.myBook.thumbnailUrl}></img>
          <footer>
            {/* Displaying the book's title and authors */}
            <p>{props.myBook.title}</p> <cite title="Source Title">{props.myBook.authors}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );// writing the visual piece of this component
}

export default BookItem;