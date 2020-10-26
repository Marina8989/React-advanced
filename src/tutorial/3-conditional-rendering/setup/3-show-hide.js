import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShouw] = useState(false)
  return <>
    <button className='btn' onClick={()=> setShouw(!show)}>Click</button>
    {show && <Item />}
  </>
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
     window.addEventListener('resize', checkSize)
     return () =>{
       window.removeEventListener('resize', checkSize)
     }
  }, [])

  return (
  <div style={{marginTop: '2rem'}}>
    <h1>window</h1>
    <h2>size: {size} px</h2>
  </div>
  )
}

export default ShowHide;
