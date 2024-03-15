import { Button } from 'react-bootstrap';
function GroupContainer({setCurrentGroup,group, setPoint, setSelectedItem, setContextMenuShow,setType}:any) {
    return (
        <Button 
            className='m-1'
            onContextMenu={(e) => {
                e.preventDefault(); // prevent the default behaviour when right clicked
                setPoint({x: e.pageX, y: e.pageY})
                setSelectedItem(group);
                setContextMenuShow(true);
                setType('group');
                console.log("Right Click",e.pageX, e.pageY);
            }}
            size="sm" onClick={()=>{setCurrentGroup(group)}} variant="outline-primary"
        >
            {group.title}
        </Button>
    );
}
  
  export default GroupContainer;