const initialState = {
   api: []
};
const reducer = (state = initialState, action)=>{
   switch (action.type) {
      case 'SET_API':
         return{
            ...state,
            api: action.payload
         };
      default:
         return state;
   }
};

export default reducer;