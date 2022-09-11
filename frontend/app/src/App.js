
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/pages/Footer'

// Create the function
export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

export default function App() {
  return (
    <div>
       {/* Call the function to add a library */}
  {AddLibrary(
  'https://code.jquery.com/jquery-1.12.1.min.js')}
  {AddLibrary(
  'https://www.govmap.gov.il/govmap/api/govmap.api.js')}
      <NavBar />
      <Footer />
    </div>
  )
}
