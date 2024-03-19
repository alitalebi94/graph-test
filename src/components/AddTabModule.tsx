import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "../store";
import { INSERT_TAB } from "../store/actions";
import {groups, tab, point} from "../components/types/elementsInterface"
interface props {
    currentGroup:groups | undefined; 
    updateCurrentGroup: () => void;  
}
function AddTab({currentGroup,updateCurrentGroup}:props) {
    const dispatch = useDispatch();
    const addTab = () =>{
        let groupid = 0
        if(currentGroup){
            groupid = currentGroup.id
        }
        let newTab:tab = {name:'new-tab', pin:false, id:2, text:''}
        dispatch({type: INSERT_TAB,payload:{groupid:groupid,newTab:newTab}});
        updateCurrentGroup();
      }
    return (
        <Button size="sm" variant="btn btn-link" onClick={addTab}><img className='closeIcon me-2 bold' src='icons/icons8-plus-50.svg' width={'15px'}/>new tab</Button>
    );
}
  
  export default AddTab;