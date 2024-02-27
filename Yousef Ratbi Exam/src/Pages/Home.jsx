
import { useState } from 'react'
import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


function Home() {
  const [count, setCount] = useState(0)   
  return <>
  <Header/>
<div>
      <div className="d-flex justify-content-center">
        <button onClick={() => setCount((count) => count + 1)} >
          count is {count}
        </button>
      </div> 
    </div>
 <Footer></Footer>
  </>
   
  
}

export default Home
