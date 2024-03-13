import { Button } from 'react-bootstrap';
function TabContainer({name,id}:any) {
    return (
        <Button className='max-with-150' size="sm" onClick={()=>{console.log(id)}} variant="outline-primary">{name}</Button>
    );
}
  
  export default TabContainer;