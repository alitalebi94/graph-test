import { Button } from 'react-bootstrap';
function GroupContainer({name,id}:any) {
    return (
        <Button 
            onContextMenu={(e) => {
                e.preventDefault(); // prevent the default behaviour when right clicked
                console.log("Right Click",e.pageX, e.pageY);
            }}
            size="sm" onClick={()=>{console.log(id)}} variant="outline-primary"
        >
            {name}
        </Button>
    );
}
  
  export default GroupContainer;