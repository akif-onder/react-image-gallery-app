import React, { useState } from 'react';
import Images from "./images";
import './gallery.css';
import { FaWindowClose  } from "react-icons/fa";




const Gallery = () => {
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

  return (
    <>
    <div className={model ? 'model open' : 'model'}>
        <img src={tempImgSrc} />
        <FaWindowClose onClick={() => setModel(false)} className='x'/>
    </div>
    <div className='gallery'>
        {Images.map((item, index)=>{
            return(
                <div className="pics" key={index}>
                    <img onClick={() => getImg(item.image)} src={item.image} style={{width: '100%'}} />
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Gallery