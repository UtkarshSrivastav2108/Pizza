import axios from 'axios'

export const getAllPizzas = () => {
    dispatc({ type: 'GET_PIZZAS_REQUEST' });

    try {
        const response = axios.get('/api/pizzas/getpizzas');
        console.log(response);
        dispatc({ type: 'GET_PIZZAS_SUCCESS', payload: response.data });
    } catch (error) {

        dispatc({ type: 'GET_PIZZAS_FAILED', payload: error });

    }


}
