export const initialState = {
    user:null,
    playLists : [],
    plaing : false,
    item : null,
    token : "BQBjjjbg--fJwGeQc3RCEW_LtRecWGpy5ruZfM9GoKGYw-flKtzeU_PrXzKeoEn7VkqcBmfPGW0AKNRWvWSeekqiT0weyWRJneKGMkiSIqABY6nkYozYOsdk1-SYnwYijsj_ZOYS5C6xTPLyQknq3_80O4KIm4ar-XnB5KmXxSSiFQqmqYFR8c7iAyRWWl-z025pTObJdoTCAUO8moNZ-g"
};

const reducer = (state,action) => {
   console.log(action);

   switch(action.type){
    case "SET_USER" :
        return {
            ...state,
            user : action.user
        }
    case "SET_TOKEN" :
        return {
            ...state,
            token : action.token
        }
    case "SET_PLAYLISTS" : 
         return {
            ...state,
            playLists : playlists
         }
    default : 
        return state
   }
}

export default reducer;