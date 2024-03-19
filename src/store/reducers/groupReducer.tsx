// action - state management
import { groups } from '../../components/types/elementsInterface';
import { INSERT_GROUP, UPDATE_GROUP, DELETE_GROUP, EMPTY_GROUP, UPDATE_TAB, INSERT_TAB, DELETE_TAB, DELETE_OTHER_TAB, EMPTY_TAB } from '../actions';

export const initialState:any = {
   groups: [],
};

//-----------------------|| ACCOUNT REDUCER ||-----------------------//

const groupReducer = (state = initialState, action:any) => {

    switch (action.type) {
        case INSERT_GROUP: {
            return Object.assign({}, state, {
                groups: state.groups.concat(action.payload.group),
            })
        }
        case UPDATE_GROUP: {
            let groups:groups[] = state.groups;
            console.log('aaa',action.payload.group)
            console.log('aaa222',state.groups)
            // state.groups.forEach((element:groups,index:number) => {
            //     if(action.payload.group.id == element.id){
            //         groups[index] =  action.payload.group;
            //     }
            // });
            // return Object.assign({}, state, {
            //     groups: groups,
            // })
            groups = state.groups.map((group:groups)=>{
                if(action.payload.group.id == group.id){
                    return action.payload.group;
                }
                return group
            })
            return {...state, groups: groups}
        }
        case DELETE_GROUP: {
            let groups:groups[] = state.groups;
            state.groups.forEach((element:groups,index:number) => {
                if(action.payload.group.id == element.id){
                    groups.splice(index, 1);
                }
            });
            return Object.assign({}, state, {
                groups: groups,
            })
        }
        case EMPTY_GROUP: {
            return Object.assign({}, state, {
                groups: [],
            })
        }
        case INSERT_TAB: {
            let groups:groups[] = state.groups;            
            groups = state.groups.map((group:groups)=>{
                if(action.payload.groupid == group.id){
                    let insertedTab = {...action.payload.newTab, id:group.tabs.length}
                    return {...group,tabs:group.tabs.concat(insertedTab)};
                }
                return group
            })
            return {...state, groups: groups}
        }
        case DELETE_TAB: {
            let groups:groups[] = state.groups;
            groups = state.groups.map((group:groups)=>{
                if(action.payload.groupid == group.id){
                    return {...group,tabs:group.tabs.filter((tab)=>action.payload.tabid != tab.id)};
                   
                }
                return group
            })
            console.log('aaa222333',groups)
            return {...state, groups: groups}
        }
        case DELETE_OTHER_TAB: {
            let groups:groups[] = state.groups;
            console.log('aaa',action.payload.groupid)
            console.log('aaa',action.payload.tabid)
            console.log('aaa222',state.groups)
            groups = state.groups.map((group:groups)=>{
                if(action.payload.groupid == group.id){
                    return {...group,tabs:group.tabs.filter((tab)=>action.payload.tabid == tab.id)};
                   
                }
                return group
            })
            console.log('aaa222333',groups)
            return {...state, groups: groups}
        }
        case UPDATE_TAB: {
            let groups:groups[] = state.groups;            
            groups = state.groups.map((group:groups)=>{
                if(action.payload.groupid == group.id){
                    if(action.payload.groupid == group.id){
                        return {...group,tabs:group.tabs.map((tab)=>{
                           if(action.payload.tab.id == tab.id){
                            return {...tab,name:action.payload.tab.name,pin:action.payload.tab.pin,text:action.payload.tab.text}
                           }
                           return tab;
                        })};
                       
                    }
                }
                return group
            })
            return {...state, groups: groups}
        }
        case EMPTY_TAB: {
            let groups:groups[] = state.groups;
            groups = state.groups.map((group:groups)=>{
                if(action.payload.groupid == group.id){
                    return {...group,tabs:[]};
                   
                }
                return group
            })
            console.log('aaa222333',groups)
            return {...state, groups: groups}
        }
        default: {
            return { ...state };
        }
    }
};

export default groupReducer;
