import axios from "@/utils/axios"

const profileFetch = () => {
    return dispatch => {
        const url = "/account/profile/"

        axios.get(url).then(res=>console.log(res.data,"profile"))
    }
}