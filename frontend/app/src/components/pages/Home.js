import React, { useEffect } from 'react'
import "./Home.css";




export default function Home() {
  useEffect(()=>{

  console.log("im here")
    window.govmap.createMap('map', 
    {
        token: 'fd5a4a40-d589-4011-bd9b-eb42dba4303b',
        layers: ["EMERGANCY_HOSPITALS","PHARMACIES"],
        showXY: true,
        identifyOnClick: true,
        isEmbeddedToggle: false,
        background: "3",
        MapMode: 1,
        layersMode: 1,
        showNavBtn: 0,
        showBackBtn: 0,
        zoomButtons:false,
    });
  },[]);

  function measurement(){
    window.govmap.showMeasure();
  }

  function refresh(){
    window.govmap.clearDrawings();
}


function drawRadios() {
  //start draw mode
  window.govmap.draw(window.govmap.drawType.Circle).progress(function (response) {
      //wait 3 second and zoom to the drawed circle
      setTimeout(function () { window.govmap.zoomToDrawing(); }, 3000)
  });
}





  return (
    <div className='Home'>
      <div className='buttons'>
        <button type='button' className='mapButton' onClick={measurement} >measurement</button>
        <button type='button' className='mapButton' onClick={refresh} >clear</button>
        <button type='button' className='mapButton' onClick={drawRadios} >draw</button>
      </div>
      <div id='map' className='map'>
      </div>
    </div>
  )
}
