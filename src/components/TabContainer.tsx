import { Button } from 'react-bootstrap';
function TabContainer({setCurrentTab,tab, setPoint, setSelectedItem, setContextMenuShow,setType, pin}:any) {
    return (
        // <TabButton />
         <Button
            onContextMenu={(e) => {
                e.preventDefault(); // prevent the default behaviour when right clicked
                setPoint({x: e.pageX, y: e.pageY})
                setSelectedItem(tab);
                setContextMenuShow(true);
                setType('tab');
            }}
            className='max-with-150 m-1 mb-0' 
            size="sm" 
            onClick={()=>{setCurrentTab(tab)}} 
            variant="btn"
            id={tab.id}
            >
                {tab.pin || pin? <img src='./icons/pin.png' width={'15px'}/>:''}
                {' ' +tab.name}
            </Button>
    );
}
  
  export default TabContainer;