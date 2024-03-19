import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/Main';
import Header from './components/Header';
import './assets/style.less';
import { useDispatch } from './store';
import { useEffect } from 'react';
import { INSERT_GROUP } from './store/actions';
function App() {
  const dispatch = useDispatch();
   useEffect(()=>{ 
    if(!localStorage.getItem('graph-groups')){
       // dispatch({type: EMPTY_GROUP});
      dispatch({type:INSERT_GROUP, payload:{group:{title:'whitout-group', pin:false, id:0, tabs:[]}}})
      // dispatch({type:INSERT_GROUP, payload:{group:{title:'ali2', id:2,tabs:[{name:'alitab2', pin:false, id:1, text:'tab1 of group2'}]}}})
    }
    // dispatch({type: EMPTY_GROUP});
    // dispatch({type:INSERT_GROUP, payload:{group:{title:'ali',id:1, tabs:[{name:'alitab',id:1,pin:true, text:'tab1 of group1'}]}}})
    // dispatch({type:INSERT_GROUP, payload:{group:{title:'ali2', id:2,tabs:[{name:'alitab2', pin:false, id:1, text:'tab1 of group2'}]}}})
  },[])
  return (
    <div >
      <Header />
      <div className='min-height-50'></div>
      <MainPage />
    </div>
  );
}

export default App;
