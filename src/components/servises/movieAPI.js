import axios from "axios";


export const movieAPI = async (page) => {
    const params = {
        api_key: 'fab61af76b035bb5fe60a72bbd93e670',
}

    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?page=${page}`, {params});

    return data;

}

export const getMovieByID = async (id) => {
    const params = {
        api_key: 'fab61af76b035bb5fe60a72bbd93e670',
     }
     const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {params});
    return data;
}

export const getMovieCredits = async (id) => {
    const params = {
        api_key: 'fab61af76b035bb5fe60a72bbd93e670',
     }
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {params});
    return data.cast;
}


export const getMovieReviews = async (id) => {
    const params = {
        api_key: 'fab61af76b035bb5fe60a72bbd93e670',
     }
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews`, {params});
    return data;
}

export const getMovieQuery = async (query, page) => {
    const params = {
        'query': query,
        api_key: 'fab61af76b035bb5fe60a72bbd93e670',
     } 

     const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?page=${page}`, {params});
     return data;
}
