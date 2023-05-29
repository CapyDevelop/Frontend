import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'space-between'
    }}>
    <Header/>
    <Main/>
    <Footer/>
    </div>
  )
}

export default App;
