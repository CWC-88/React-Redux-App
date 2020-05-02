export const GET_GIFS = "GET_GIFS"
export const GET_GIFS_SUCCESS = "GET_GIFS_SUCCESS"
// export const GET_GIFS_FAIL = "GET_GIFS_FAIL"


export const getGif = () => dispatch =>{
    dispatch({ type: GET_GIFS});

fetch('https://api.giphy.com/v1/gifs/trending?api_key=X9jUbBliiErlJDIvwKvSgu5sNlYEUG4d&limit=25&rating=G')
.then(res => res.json())
.then(res =>{


    console.log(res);

    dispatch({type: GET_GIFS_SUCCESS, payload: res.data})
})
// X9jUbBliiErlJDIvwKvSgu5sNlYEUG4d

// example
// https://api.giphy.com/v1/gifs/trending?api_key=X9jUbBliiErlJDIvwKvSgu5sNlYEUG4d&limit=25&rating=G

// dispatch({
//     type: 
// })


}


