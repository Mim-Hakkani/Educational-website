import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header></Header>
          <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
