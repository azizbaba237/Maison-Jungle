import React from 'react'
import CareScale from "./CareScale";

function handleClick(plantName) {
  alert(`vous voullez acheter 1 ${plantName} ? Tres bon choix 🌱✨ `)
}


function plantItem({ id, cover, name, water, light }) {
  return (
    <div>
        <li key={id} className="p-2" onClick={() => handleClick}> 
            <img src={cover} alt={`${name} cover`} className="w-60 h-60 object-cover rounded-3xl" />
            {name}
            <div className="flex items-start justify-center flex-col">
                <CareScale careType='water' scaleValue={water}/>
                <CareScale careType='light' scaleValue={light}/>
            </div>
        </li>
    </div>
  )
}

export default plantItem