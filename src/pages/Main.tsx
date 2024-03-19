import GroupContainer from "../components/GroupContainer";
import TabContainer from "../components/TabContainer";
import TabContetnt from "../components/TabContent";
import { useState, useEffect } from "react";
import {groups, tab, point} from "../components/types/elementsInterface"
import ContexMenu from "../components/ContexMenu";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "../store";
import { UPDATE_GROUP } from "../store/actions";
import AddTab from "../components/AddTabModule";
import AddToGroupMenu from "../components/AddToGroupMenu";
function MainPage() {
  const [groups,setGrops]= useState<groups[]>()
  const [currentGroup,setCurrentGroup]=useState<groups>()
  const [currentTab,setCurrentTab]=useState<tab>()
  const [contexMenuShow, setContextMenuShow] = useState<boolean>(true)
  const [selectedItem, setSelectedItem] = useState<groups | tab>()
  const [point, setPoint] = useState<point>()
  const [type, setType] = useState<string>()
  const [AddToGroupMenuShow, setAddToGroupMenuShow] = useState<boolean>(false);
  let reduxGroups:groups[] = useSelector((state:any)=>state.groups.groups)
  useEffect(()=>{
    document.body.addEventListener('click',()=> {setContextMenuShow(false);setAddToGroupMenuShow(false);}); 
    setGrops(reduxGroups);
    if(currentGroup){
      groups?.forEach((group)=>{
        if(currentGroup?.id === group.id){
          setCurrentGroup(group);
        }
      });
    }
    if(currentTab){
      let elements = document.querySelectorAll('.tab-panel button');
      elements.forEach((element:any)=>{
        if(element.id == currentTab?.id){
          element.classList.add('selected-tab');
        }else{
          element.classList.remove('selected-tab');
        }
      });
    }
  });
  
  const updateCurrentGroup = ()=>{
    
  }
   
  return (
   <div className="p-2 main min-height-fit-page">
      {groups?.map((g)=>{
        return (
          <GroupContainer 
            setPoint={setPoint}
            setSelectedItem={setSelectedItem}
            setContextMenuShow={setContextMenuShow}
            setType={setType}
            setCurrentGroup={setCurrentGroup}
            group = {g}
        />
        )
      })}
      <hr />
      <div className="tab-panel">
        {currentGroup?.tabs?.map((t)=>{
          return (
            <TabContainer
              pin={currentGroup.pin}
              setPoint={setPoint}
              setSelectedItem={setSelectedItem}
              setContextMenuShow={setContextMenuShow}
              setType={setType}
              setCurrentTab = {setCurrentTab}
              tab={t}
            />
          )
        })}
        <AddTab currentGroup = {currentGroup} updateCurrentGroup={updateCurrentGroup}/>
      </div>
     
      
      {currentTab && <TabContetnt
          currentGroup = {currentGroup} 
          tab={currentTab} 
       /> }
      { contexMenuShow && selectedItem && point && type&&
        <ContexMenu
            type={type}
            selectedItem={selectedItem}
            point ={point}
            currentGroup={currentGroup}
            setAddToGroupMenuShow = {setAddToGroupMenuShow}
        />
      }
      { AddToGroupMenuShow && selectedItem && point && groups&&
        <AddToGroupMenu 
          groups = {groups}
          selectedItem={selectedItem}
          point ={point}
          currentGroup={currentGroup}
        />
      }
   </div>
  );
}

export default MainPage;