import React from 'react'

function Helmet(props) {
    document.title="Maltimart -" + props.title;
  return (
    <div className='w-96'>{
        props.children
        }</div>
  )
}

export default Helmet