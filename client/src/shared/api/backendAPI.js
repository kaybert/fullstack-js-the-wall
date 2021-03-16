import Axios from 'axios'

const URL = 'http://localhost:3001'

const BackendAPI = Axios.create({
	baseURL: URL
})

export default BackendAPI