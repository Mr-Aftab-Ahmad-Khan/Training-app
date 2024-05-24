import logo from './logo.svg';
import './App.css';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderInfo from './Components/Header-Info/HeaderInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderInfo/>
      </header>
    </div>
  );
}

export default App;
