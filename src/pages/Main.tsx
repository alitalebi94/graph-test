import GroupContainer from "../components/GroupContainer";
import TabContainer from "../components/TabContainer";
import TabContetnt from "../components/TabContent";
import { useState, useEffect } from "react";
import {groups, tab, point} from "../components/types/elementsInterface"
import ContexMenu from "../components/ContexMenu";
function MainPage() {
  const [groups,setGrops]= useState<groups[]>()
  const [currentGroup,setCurrentGroup]=useState<groups>()
  const [currentTab,setCurrentTab]=useState<tab>()
  const [contexMenuShow, setContextMenuShow] = useState<boolean>(true)
  const [selectedItem, setSelectedItem] = useState<Object>()
  const [point, setPoint] = useState<point>()
  useEffect(()=>{
    console.log(JSON.parse(localStorage.getItem("groups")|| '{}'));
    setGrops(JSON.parse(localStorage.getItem("groups")|| '{}'));
  },[]);
  return (
   <div className="p-2">
      {groups?.map((g)=>{
        return (
          <GroupContainer 
            setCurrentGroup={setCurrentGroup}
            group = {g}
        />
        )
      })}
      <hr />
      {currentGroup?.tabs?.map((t)=>{
        return (
          <TabContainer
            setCurrentTab = {setCurrentTab}
            tab={t}
          />
        )
      })}
      {currentTab && <TabContetnt 
          tab={currentTab} 
       /> }
      { contexMenuShow && selectedItem && point && 
        <ContexMenu
            type="group"
            id={selectedItem}
            x = {point.x}
            y = {point.y}
        />
      }
   </div>
  );
}

export default MainPage;