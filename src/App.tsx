import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/Main';
import Header from './components/Header';
import './assets/style.css';
function App() {
  return (
    <div >
      <Header />
      <div className='min-height-50'></div>
      <MainPage />
    </div>
  );
}

export default App;
