import axios from 'axios'

const instance =  axios.create({
	baseURL: process.env.REACT_APP_BACKEND_SERVER_PATH
})

export default instance  