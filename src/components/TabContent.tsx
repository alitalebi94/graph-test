import { Button } from 'react-bootstrap';
import { groups, tab } from './types/elementsInterface';
import { useDispatch } from "../store";
import { UPDATE_TAB } from "../store/actions";
import { useEffect, useState } from 'react';
interface props {
    tab:tab;
    currentGroup:groups | undefined;
}
function TabContetnt({tab, currentGroup}:props) {
    const [tabToShow, setTabToShow] =useState<tab>();
    const dispatch = useDispatch();
    useEffect(()=>{
        if(tabToShow != tab){
            let element = document.getElementById('tab-content') as HTMLInputElement
            setTabToShow(tab);
            element.value = tab.text;
        }
    })
    const changeText = () => {
        let element = document.getElementById('tab-content') as HTMLInputElement
        let value = element.value;
        
        dispatch({type: UPDATE_TAB, payload:{groupid:currentGroup?.id, tab: {...tab, text: value}}});
        //setTabToShow({...tab, text: element!.value});
    };
    return (
        <div className='d-flex flex-direction-column justify-content-center'>
            <label className='d-blick w-100 '>text:</label>
            <input  className='' type="text" id="tab-content" name="rename" defaultValue={tabToShow?.text ||''} />
            <div className='text-center'>
                <Button className='w-25 mt-3' size="sm" variant="btn btn-info" onClick={changeText}>change text</Button>
            </div>
            
        </div>
    //    <p>{tab.text}</p>
    );
}
  
  export default TabContetnt;