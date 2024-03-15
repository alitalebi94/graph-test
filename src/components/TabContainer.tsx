import { Button } from 'react-bootstrap';
import TabButton from './common/TabButton';
function TabContainer({setCurrentTab,tab}:any) {
    return (
        // <TabButton />
         <Button className='max-with-150 m-1' size="sm" onClick={()=>{setCurrentTab(tab)}} variant="outline-primary">{tab.name}</Button>
    );
}
  
  export default TabContainer;