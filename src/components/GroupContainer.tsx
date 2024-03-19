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
            size="sm" 
            onClick={()=>{setCurrentGroup(group)}} 
            variant="outline-primary"
            id={group.id}
        >
            {group.pin? <img src='./icons/pin.png' width={'15px'}/>:''}
            <img className='closeIcon mb-1 me-2 ms-1 bold' src='icons/folder.svg' width={'13px'}/>
            {' '+group.title+' '}
            <span className='back-sky ms-1'>{group.tabs.length}</span>
        </Button>
    );
}
  
  export default GroupContainer;