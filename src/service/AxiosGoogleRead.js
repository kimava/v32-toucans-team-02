import axios from 'axios'

const Instance = axios.create(
    {
        baseURL:'https://www.googleapis.com/books/v1/volumes?q=',
    }
)
export default Instance