import { Button } from 'react-bootstrap';
import { tab } from './types/elementsInterface';

interface props {
    type:string;
    id:Object;
    x:number;
    y:number;
}

function ContexMenu({type,id,x,y}:props) {
    return (
       <p>{type}</p>
    );
}
  
  export default ContexMenu;