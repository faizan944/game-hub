import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'b82cf76987cb476ea258e350bfe46592'
    }
})