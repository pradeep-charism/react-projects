import axios from 'axios'

const INVESTOR = 'sg-investor'
const Stock_API_URL = 'http://localhost:8080'
const INVESTOR_API_URL = `${Stock_API_URL}/depository/${INVESTOR}`

class StockDataService {

    retrieveAllStocks(name) {
        //console.log('executed service')
        return axios.get(`${INVESTOR_API_URL}/stocks`);
    }

    retrieveStock(name, id) {
        //console.log('executed service')
        return axios.get(`${INVESTOR_API_URL}/stocks/${id}`);
    }

    deleteStock(name, id) {
        //console.log('executed service')
        return axios.delete(`${INVESTOR_API_URL}/stocks/${id}`);
    }

    updateStock(name, id, stock) {
        //console.log('executed service')
        return axios.put(`${INVESTOR_API_URL}/stocks/${id}`, stock);
    }

    createStock(name, stock) {
        //console.log('executed service')
        return axios.post(`${INVESTOR_API_URL}/stocks/`, stock);
    }
}

export default new StockDataService()