import {
GET_GIFS,
GET_GIFS_SUCCESS
} from "../actions/index";

const initialState = {
    giph:[],
    isFetching:false, 
    error:""
};

export const reducer= (state = initialState, action)=>{
switch(action.type){
    case GET_GIFS:
        return{
            ...state,
            isFetching:true
        };

        case GET_GIFS_SUCCESS:
            return{
                ...state,
                isFetching:false,
                giph:action.payload
            };
            default:
                return state;
}

}