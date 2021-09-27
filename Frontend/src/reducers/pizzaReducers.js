export const getAllPizzasReducer = (state = {}, action) => {


    switch (key) {
        case 'GET_PIZZAS_REQUEST': return {
            ...state
        }
        case 'GET_PIZZAS_SUCCESS': return {
            pizzas: action.payload
        }

        case 'GET_PIZZAS_FAILED': return {
            error: action.payload
        }

        default: return state

    }
}