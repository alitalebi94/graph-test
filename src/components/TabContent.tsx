import { Button } from 'react-bootstrap';
import { tab } from './types/elementsInterface';
interface props {
    tab:tab
}
function TabContetnt({tab}:props) {
    return (
       <p>{tab.text}</p>
    );
}
  
  export default TabContetnt;