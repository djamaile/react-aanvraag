const aankopenReducerDefaultState = [];

const aankopenReducer = (state = aankopenReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_AANKOOP': 
            return [
                ...state, 
                action.aankoop
            ];
        case 'VERWIJDER_AANKOOP':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_AANKOOP': 
            return state.map((aankoop) => {
                if(aankoop.id === action.id){
                    return {
                        ...aankoop, 
                        ...action.update
                    };
                }else{
                    return aankoop;
                }
            });
        default: 
            return state;
    }
};

export default aankopenReducer;