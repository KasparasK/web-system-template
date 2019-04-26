import * as types from "../actions/actionTypes";

const initialState = {
   ladder: [],
   error:""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_LADDER_START:
            return {
                state
            };
        case types.FETCH_LADDER_SUCCSESS:
            return  Object.assign({}, state, {
                ladder: action.items
              })
        case types.FETCH_LADDER_FAILURE:
           return  Object.assign({}, state, {
            error: action.error
          })
        default:
            return state;
    }
};