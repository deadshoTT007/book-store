import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div style={{display:'flex',justifyContent:"center"}}>
           <TailSpin height="700" width="300" color="red" ariaLabel="Loading"/> 
        </div>
    )
}

export default Loader
