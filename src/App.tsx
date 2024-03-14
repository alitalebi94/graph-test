import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/Main';
import Header from './components/Header';
import './assets/style.css';
function App() {
  //localStorage.setItem("groups", JSON.stringify([1]));
  localStorage.setItem("groups", JSON.stringify([{title:'ali',id:1, tabs:[{name:'alitab',id:1, text:'tab1 of group1'}]},{title:'ali2', id:2,tabs:[{name:'alitab2', id:1, text:'tab1 of group2'}]}]));
  return (
    <div >
      <Header />
      <div className='min-height-50'></div>
      <MainPage />
    </div>
  );
}

export default App;
