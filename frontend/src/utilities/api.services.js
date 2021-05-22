import axios from "axios";

const API_BASE_URL = `http://localhost:8000/`;

class ApiService {

    getHeaders = () => {
        axios.defaults.baseURL = API_BASE_URL;
        axios.defaults.headers.common["Content-Type"] = "application/json";
        return axios;
    };

    api = (httpMethod, endPoint, DTO = {}) => {
        switch (httpMethod) {
            case 'get':
                return this.getHeaders().get(`${API_BASE_URL}${endPoint}`, DTO);
            case 'post':
                return this.getHeaders().post(`${API_BASE_URL}${endPoint}`, DTO);
            case 'put':
                return this.getHeaders().put(`${API_BASE_URL}${endPoint}`, DTO);
            case 'delete':
                return this.getHeaders().delete(`${API_BASE_URL}${endPoint}`, DTO);
            default:
                break;
        }
    };
}
export default new ApiService();
