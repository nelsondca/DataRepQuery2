import Card from 'react-bootstrap/Card';


//New Component
//This component is Granchild of read
function BookItem(props){
    
    return (
        
    <Card>
      <Card.Header>{props.myBook.title}</Card.Header>
        <Card.Body>
        <blockquote className="blockquote mb-0">
            <img src={props.myBook.thumbnailUrl}></img>
          <footer>
            <p>{props.myBook.title}</p> <cite title = "Source Title">{props.myBook.authors}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
            // {/* <h3>{props.myBook.title}</h3>{/* curly brackets here means i can write js code */}
            // {/* <img src = {props.myBook.thumbnailUrl}></img>
            // <p>{props.myBook.authors[0]}</p> */}
    );// writing the visual piece of this component
}

export default BookItem;