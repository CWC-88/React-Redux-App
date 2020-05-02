import React from "react"
import {connect} from "react-redux"

import {getGif} from "../actions/index"


const Gifs = ({getGif,giph, isFetching }) =>{
 

    return(
        <div>
            Daily Gifs 
            <button onClick={getGif}>
|||||||
            </button>
        


{giph.map((item) => {
    return(
        <img src={item.images.preview_gif.url}/>
    )
})
}

        </div>
    )

}
const mapStateToProps = (state) =>{
    return{
        giph: state.giph,
        isFetching: state.isFetching
    };
};


export default connect(
    mapStateToProps,
    {getGif}
)(Gifs
    )

