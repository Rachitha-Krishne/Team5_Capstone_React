import axios from "axios"
const commentUrl = 'http://localhost:8090/api/add-hotel';

const postHotel = (newHotel) => {
    const url = `${commentUrl}`;
    console.log(url);
    return axios.post(url,newHotel)
}

export {postHotel}