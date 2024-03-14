import { Button } from 'react-bootstrap';
function TabContainer({setCurrentTab,tab}:any) {
    return (
        <Button className='max-with-150 m-1' size="sm" onClick={()=>{setCurrentTab(tab)}} variant="outline-primary">{tab.name}</Button>
    );
}
  
  export default TabContainer;