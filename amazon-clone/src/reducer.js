export const initialState = {
    basket: [],
    user: null
};


export const getBasketTotal = (basket) => 
    basket?.reduce((amount,item) => item.price + amount, 0);



const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_BASKET":
            //logic to add item to basket  
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case "REMOVE_FROM_BASKET":
            console.log(action)
            //logic to remove item from basket
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if(index >= 0) {
                //item exists in basket so remove it
                newBasket.splice(index,1);
            }
            else {
                console.warn(`Can't remove product (id : ${action.id}) as its not in the basket`)
            }
            return { 
                ...state,
                 basket : newBasket
                 }
            break;

        case "SET_USER" :
            return {
                ...state,
                user : action.user
            }


        default:
            return state
    }
}

export default reducer;