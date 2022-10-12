import axios from "axios";
import { setRepos } from "../../reducers/reposReducer";

export const getRepos = (searchQuery = "stars:%3E1") => {
    return async (dispatch) => {
        const responce = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`)
        dispatch(setRepos(responce.data))
    }
}