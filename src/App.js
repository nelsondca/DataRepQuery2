
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from  './components/footer';


function App() {
  return (
    <div className ="App">
        {/* Calling the functions from another components */}
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </div>
   );
}

export default App;
