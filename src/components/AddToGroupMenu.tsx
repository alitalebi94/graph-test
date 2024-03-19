import { Button } from 'react-bootstrap';
import { tab,point, groups } from './types/elementsInterface';
import { useDispatch } from "../store";
import { INSERT_TAB, INSERT_GROUP } from "../store/actions";
interface props {
    groups:groups[];
    point:point;
    selectedItem:groups | tab;
    currentGroup: groups | undefined;
}

function AddToGroupMenu({groups,point,selectedItem,currentGroup}:props) {
    const dispatch = useDispatch();
    const addToNewGroup = () => {
        dispatch({type:INSERT_GROUP, payload:{group:{title:'new-group',id:groups.length,pin:false, tabs:[selectedItem]}}})
    };
    const addToGroup = (groupId:number) => {
        console.log("removeTab",currentGroup)
        dispatch({type:INSERT_TAB, payload:{groupid:groupId, newTab: selectedItem}});
    };
    let styles = {
        position: "absolute",
        top:point.y,
        left:point.x+220,
        border: "1px solid blue",
        borderRadius: "3px",
       // width:"250px",
        backgroundColor:"white"
    }as React.CSSProperties;
  
    return (
        <div className='d-flex flex-direction-column  text-start group-list' style={styles}>
            <Button className='m-1 p-0 text-start mx-2 ms-3' size="sm" variant="btn " onClick={addToNewGroup}>create new group</Button>
            <hr className='m-0 p-0' />
            {groups?.map((g)=>{
                return (
                    <>
                        <Button className='m-1 p-0 text-start mx-2' size="sm" variant="btn" onClick={()=>addToGroup(g.id)}><img className='closeIcon mb-1 me-2 ms-1 bold' src='icons/folder.svg' width={'13px'}/>{g.title+' | '+g.tabs.length+' tabs'}</Button>
                        <hr className='m-0 p-0' />
                    </>
                  
                )
            })}
        </div>
      

        // <div className='' style={styles}>
        //     <Button size="sm" variant="btn btn-link" onClick={copytTab}><img className='closeIcon me-3 ms-1 bold' src='icons/icons8-close(1).svg' width={'15px'}/>copy tab</Button>
        //     <Button size="sm" variant="btn btn-link" onClick={removeTab}><img className='closeIcon me-3 ms-1 bold' src='icons/icons8-close(1).svg' width={'15px'}/>close tab</Button>
        //     <Button size="sm" variant="btn btn-link" onClick={removeOtherTab}><img className='closeIcon me-3 ms-1 bold' src='icons/icons8-close(1).svg' width={'15px'}/>close other tabs</Button>
        // </div>
        
    );
    
   
}
  
  export default AddToGroupMenu;