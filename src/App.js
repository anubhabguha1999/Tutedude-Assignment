import './App.css';
import Header from './component/Heading';
import Ui from './component/userInterface';
import Card from './component/refferandearn';
import Body from './component/main';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Ui />
      <Card />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
