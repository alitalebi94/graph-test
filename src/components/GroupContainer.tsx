import { Button } from 'react-bootstrap';
function GroupContainer({setCurrentGroup,group}:any) {
    return (
        <Button 
            className='m-1'
            onContextMenu={(e) => {
                e.preventDefault(); // prevent the default behaviour when right clicked
                console.log("Right Click",e.pageX, e.pageY);
            }}
            size="sm" onClick={()=>{setCurrentGroup(group)}} variant="outline-primary"
        >
            {group.title}
        </Button>
    );
}
  
  export default GroupContainer;