import axios from 'axios'

const INVESTOR = 'sg-investor'
const COURSE_API_URL = 'http://localhost:8080'
const INVESTOR_API_URL = `${COURSE_API_URL}/depository/${INVESTOR}`

class CourseDataService {

    retrieveAllCourses(name) {
        //console.log('executed service')
        return axios.get(`${INVESTOR_API_URL}/stocks`);
    }

    retrieveCourse(name, id) {
        //console.log('executed service')
        return axios.get(`${INVESTOR_API_URL}/stocks/${id}`);
    }

    deleteCourse(name, id) {
        //console.log('executed service')
        return axios.delete(`${INVESTOR_API_URL}/stocks/${id}`);
    }

    updateCourse(name, id, course) {
        //console.log('executed service')
        return axios.put(`${INVESTOR_API_URL}/stocks/${id}`, course);
    }

    createCourse(name, course) {
        //console.log('executed service')
        return axios.post(`${INVESTOR_API_URL}/stocks/`, course);
    }
}

export default new CourseDataService()