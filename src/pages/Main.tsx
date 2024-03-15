import GroupContainer from "../components/GroupContainer";
import TabContainer from "../components/TabContainer";
import TabContetnt from "../components/TabContent";
import { useState, useEffect } from "react";
import {groups, tab, point} from "../components/types/elementsInterface"
import ContexMenu from "../components/ContexMenu";
import { Button } from "react-bootstrap";
function MainPage() {
  const [groups,setGrops]= useState<groups[]>()
  const [currentGroup,setCurrentGroup]=useState<groups>()
  const [currentTab,setCurrentTab]=useState<tab>()
  const [contexMenuShow, setContextMenuShow] = useState<boolean>(true)
  const [selectedItem, setSelectedItem] = useState<groups | tab>()
  const [point, setPoint] = useState<point>()
  const [type, setType] = useState<string>()
  const [showNewTabModal, setShowNewTabModal] = useState<boolean>(false)
  useEffect(()=>{
    console.log(JSON.parse(localStorage.getItem("groups")|| '{}'));
    setGrops(JSON.parse(localStorage.getItem("groups")|| '{}'));
  },[]);
  return (
   <div className="p-2">
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
      {currentGroup?.tabs?.map((t)=>{
        return (
          <TabContainer
            setPoint={setPoint}
            setSelectedItem={setSelectedItem}
            setContextMenuShow={setContextMenuShow}
            setType={setType}
            setCurrentTab = {setCurrentTab}
            tab={t}
          />
        )
      })}
      <Button size="sm" variant="btn btn-link" onClick={()=>setShowNewTabModal(true)}><img className='closeIcon me-2 bold' src='icons/icons8-plus-50.svg' width={'15px'}/>new tab</Button>
      {currentTab && <TabContetnt 
          tab={currentTab} 
       /> }
      { contexMenuShow && selectedItem && point && type&&
        <ContexMenu
            type={type}
            id={selectedItem}
            point ={point}
        />
      }
   </div>
  );
}

export default MainPage;