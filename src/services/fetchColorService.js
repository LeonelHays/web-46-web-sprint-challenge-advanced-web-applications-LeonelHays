
import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = (array) => {
    axiosWithAuth().get(`http://localhost:5000/api/colors`)
    .then(res => {
        res.data.map(item => {
            array.push(item);
            return array;
        })
        
    })
    .catch(err => {
        console.error(err);
    })
    return array
}

export default fetchColorService;