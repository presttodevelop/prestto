import axios from 'axios'


const idhttp = axios.create({
    baseURL:'https://prestto.mx/api/getCounter.php',
})

export default idhttp;