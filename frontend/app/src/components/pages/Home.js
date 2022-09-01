import React from 'react'
import { Helmet } from "react-helmet"
import "./Home.css";



export default function Home() {

  return (
    <div className='Home'>
      <Helmet>
      <script src="https://www.govmap.gov.il/govmap/api/govmap.api.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
          async></script>
      </Helmet>
      <iframe title='GovMap' className='ifrMap' src="https://www.govmap.gov.il//map.html?MapMode=1&amp;showNavBtn=0&amp;showBackBtn=0&amp;api_token=5a4b8472-b95b-4687-8179-0ccb621c7990&amp;parentHost=&amp;laym=EMERGANCY_HOSPITALS,PHARMACIES&amp;xy=1&amp;zb=0&amp;b=3&amp;in=1&amp;et=0&amp;lm=1"></iframe>  
    </div>
  )
}
