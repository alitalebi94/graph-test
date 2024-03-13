import GroupContainer from "../components/GroupContainer";
import TabContainer from "../components/TabContainer";
import { useState } from "react";
function MainPage() {
  const [groups,setGrops]= useState<Number[]>()
  const [currentTab,setCurrentTab]=useState<Number[]>()
  return (
   <div className="p-2">
        <GroupContainer 
            name= 'ali'
            id= 'ali'
        />
        <hr />
        <TabContainer name= 'tabasdbaks.ndsamdl;am,ds;lm,as;ldm;l' id= 'tab' />
   </div>
  );
}

export default MainPage;