import axios from 'axios'


const http = axios.create({
    baseURL:'http://prestto.mx/api/getCounter.php',
})

export default http;