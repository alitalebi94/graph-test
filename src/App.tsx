import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/Main';
import Header from './components/Header';
import './assets/style.css';
function App() {
  localStorage.setItem("groups", JSON.stringify([1]));
  localStorage.setItem("gp-1", JSON.stringify({title:'ali',tabs:{name:'alitab',text:'tab1 of group1'}}));
  return (
    <div >
      <Header />
      <div className='min-height-50'></div>
      <MainPage />
    </div>
  );
}

export default App;
