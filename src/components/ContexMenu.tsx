import { Button } from 'react-bootstrap';
import { tab,point } from './types/elementsInterface';

interface props {
    type:string;
    id:Object;
    point:point;
}

function ContexMenu({type,id,point}:props) {
    let styles = {
        position: "absolute",
        top:point.y,
        left:point.x,
        border: "1px solid blue",
        borderRadius: "3px",
       // width:"250px",
        backgroundColor:"white"
    }as React.CSSProperties;
    if(type=="group"){
        return (
      
            <div className='d-flex flex-direction-column px-3 py-2' style={styles}>
                <label className='d-blick w-100 '>rename</label>
                <input className='' type="text" id="rename" name="rename" />
                <Button className='m-0 text-start' size="sm" variant="btn btn-link"><img className='closeIcon me-2 bold' src='icons/icons8-close(1).svg' width={'15px'}/>close all group's tabs</Button>
            </div>
           
        );
    }else{
        return (
      
            <div className='' style={styles}>
                <Button size="sm" variant="btn btn-link"><img className='closeIcon me-3 ms-1 bold' src='icons/icons8-close(1).svg' width={'15px'}/>close all group's tabs</Button>
            </div>
           
        );
    }
   
}
  
  export default ContexMenu;