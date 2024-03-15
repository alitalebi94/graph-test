// action - state management
import { groups } from '../../components/types/elementsInterface';
import { INSERT_GROUP, UPDATE_GROUP, DELETE_GROUP, EMPTY_GROUP } from '../actions';

export const initialState = {
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
            state.groups.forEach((element:groups,index:number) => {
                if(action.payload.group.id == element.id){
                    groups[index] =  action.payload.group;
                }
            });
            return Object.assign({}, state, {
                groups: groups,
            })
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
        default: {
            return { ...state };
        }
    }
};

export default groupReducer;
