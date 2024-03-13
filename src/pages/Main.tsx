import GroupContainer from "../components/GroupContainer";
import TabContainer from "../components/TabContainer";
function MainPage() {
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