import { Button } from 'react-bootstrap';
import { tab,point, groups } from './types/elementsInterface';
import { useDispatch } from "../store";
import { INSERT_TAB, DELETE_TAB, DELETE_OTHER_TAB,  UPDATE_TAB, UPDATE_GROUP, EMPTY_TAB } from "../store/actions";
interface props {
    type:string;
    point:point;
    selectedItem:groups | tab;
    currentGroup: groups | undefined;
    setAddToGroupMenuShow:any;
}

function ContexMenu({type,point,selectedItem,currentGroup,setAddToGroupMenuShow}:props) {
    const dispatch = useDispatch();
    const removeTab = () => {
        dispatch({type:DELETE_TAB, payload:{groupid:currentGroup?.id, tabid: selectedItem.id}});
    };
    const copytTab = () => {
        console.log("removeTab",currentGroup)
        dispatch({type:INSERT_TAB, payload:{groupid:currentGroup?.id, newTab: selectedItem}});
    };
    const removeOtherTab = () => {
        console.log("removeTab",currentGroup)
        dispatch({type:DELETE_OTHER_TAB, payload:{groupid:currentGroup?.id, tabid: selectedItem.id}});
    };
    const addToGroup = () => {
        setAddToGroupMenuShow(true);
       
    };
    const renameTab = () => {
        let element = document.getElementById('rename-tab') as HTMLInputElement
        dispatch({type: UPDATE_TAB, payload:{groupid:currentGroup?.id, tab: {...selectedItem, name: element!.value}}});
    };
    const pinTab = () => {
        dispatch({type: UPDATE_TAB, payload:{groupid:currentGroup?.id, tab: {...selectedItem, pin: true}}});
    };
    const renameGroup = () => {
        let element = document.getElementById('rename') as HTMLInputElement
        dispatch({type: UPDATE_GROUP,payload:{group:{...selectedItem, title: element!.value}}});
    };
    const pinGroup = () => {
        dispatch({type: UPDATE_GROUP,payload:{group:{...selectedItem, pin: true}}});
    };
    const colorGroup = (color:string) => {
        dispatch({type: UPDATE_GROUP,payload:{group:{...selectedItem, color: color}}});
    };
    const emptyGroupTabs = () => {
        dispatch({type: EMPTY_TAB,payload:{groupid:selectedItem.id}});
    };
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
            <div className='d-flex flex-direction-column' style={styles}>
                <label className='d-blick w-100 m-1 p-0 text-start mx-2 font-weight-700'>rename</label>
                <input onClick={(e)=>e.stopPropagation()} className='m-1 p-0 text-start mx-2' type="text" id="rename" name="rename" />
                <Button className=' mx-2 mb-1  font-weight-700' size="sm" variant="btn btn-info" onClick={renameGroup}>rename group</Button>
                <hr className='m-0 p-0' />
                <div className='m-1 p-0 text-start mx-2' >
                    <Button className='' size="sm" variant="btn btn-success" onClick={()=>colorGroup('green')}></Button> 
                    <Button className='mx-2' size="sm" variant="btn btn-danger" onClick={()=>colorGroup('red')}></Button>
                    <Button className='' size="sm" variant="btn btn-info" onClick={()=>colorGroup('blue')}></Button>
                    <Button className='mx-2' size="sm" variant="btn btn-warning" onClick={()=>colorGroup('yellow')}></Button>
                </div>
                <hr className='m-0 p-0' />
                <Button className='m-1 p-0 text-start mx-2  font-weight-700' size="sm" variant="btn btn-default" onClick={pinGroup}><img className='closeIcon me-2 ms-1 bold' src='icons/pin.png' width={'15px'}/>pin group</Button>
                <hr className='m-0 p-0' />
                <Button onClick={emptyGroupTabs} className='m-1 p-0 text-start mx-2  font-weight-700' size="sm" variant="btn"><img className='closeIcon me-2 bold' src='icons/icons8-close(1).svg' width={'15px'}/>close all group's tabs</Button>
            </div>
           
        );
    }else{
        return (
      
            <div className='d-flex flex-direction-column font-weight-700' style={styles}>
                <label className='d-blick w-100 m-1 p-0 text-start mx-2  font-weight-700'>rename</label>
                <input onClick={(e)=>e.stopPropagation()} className='m-1 p-0 text-start mx-2' type="text" id="rename-tab" name="rename" />
                <Button className=' mx-2 mb-1  font-weight-700' size="sm" variant="btn btn-info" onClick={renameTab}>rename tab</Button>
                <hr className='m-0 p-0' />
                <Button className='m-1 p-0 text-start mx-2  font-weight-700' size="sm" variant="btn btn-default" onClick={pinTab}><img className='closeIcon me-3 ms-1 bold' src='icons/pin.png' width={'15px'}/>pin tab</Button>
                <hr className='m-0 p-0' />
                <Button  className='m-1 p-0 text-start mx-2  font-weight-700' size="sm" variant="btn " onClick={(e)=>{ e.stopPropagation();addToGroup()}}><img className='closeIcon me-3 ms-1 bold' src='icons/icons8-plus-50.svg' width={'15px'}/>add to group    &gt;</Button>
                <hr className='m-0 p-0' />
                <Button className='m-1 p-0 text-start mx-2 font-weight-700' size="sm" variant="btn " onClick={copytTab}><img className='closeIcon me-3 ms-1 bold' src='icons/folder.svg' width={'15px'}/>copy tab</Button>
                <hr className='m-0 p-0' />
                <Button className='m-1 p-0 text-start mx-2 font-weight-700' size="sm" variant="btn " onClick={removeTab}><img className='closeIcon me-3 ms-1 bold' src='icons/icons8-close(1).svg' width={'15px'}/>close tab</Button>
                <hr className='m-0 p-0' />
                <Button className='m-1 p-0 text-start mx-2 font-weight-700' size="sm" variant="btn " onClick={removeOtherTab}><img className='closeIcon me-3 ms-1 bold' src='icons/icons8-close(1).svg' width={'15px'}/>close other tabs</Button>
            </div>
           
        );
    }
   
}
  
  export default ContexMenu;