import * as types from "./actionTypes";
import axios from 'axios';

const ladderUrl = 'http://localhost:5000/api/Ladder';

export const fetchLadderStart = () => ({
    type: types.FETCH_LADDER_START,
});

export const fetchLadderSuccess = items => ({
    type: types.FETCH_LADDER_SUCCSESS,
    items
});

export const fetchLadderFailure = (errorFetch) => ({
    type: types.FETCH_LADDER_FAILURE,
    errorFetch
});

export const fetchLikesSucc = (items) => ({
    type: types.FETCH_LIKES_SUCCSESS,
    items
});

export const postLikesSucc = (items) => ({
    type: types.POST_LIKES_SUCCSESS,
    items
});

export const fetchItems = (query) => dispatch => {
    dispatch(fetchLadderStart());
   
    axios
        .get(ladderUrl+"?count="+query.count+"&offsetFrom="+query.offsetFrom+"&name="+query.name+"&league="+query.league,
            )
        .then((response) => {
            let items = response.data;
            dispatch(fetchLadderSuccess(items));
        })
        .catch((error) => {
            
            dispatch(fetchLadderFailure(error));
        });
};

export const fetchLikes = () => dispatch => {
   
    axios
        .get(ladderUrl+"/likes",
            )
        .then((response) => {
            let items = response.data;
            dispatch(fetchLikesSucc(items));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const postLikes = (item) => dispatch => {
   
    axios
        .post(ladderUrl+"?charName="+item.charName)
        .then((response) => {
            let items = response.data;
            dispatch(postLikesSucc(items));
        })
        .catch((error) => {
            console.log(error);
        });
};