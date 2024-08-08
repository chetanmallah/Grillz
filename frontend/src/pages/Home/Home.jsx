import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Footer from '../../components/Footer/Footer'
import AppDownload from '../../components/AppDownload/AppDownload'
import Chetan from '../../components/chetan/Chetan'

const Home = () => {
const [category,setCategory] = useState("All");

  return (
    
    <div>
      <Header/>
      
      <FoodDisplay category={category}/>
      <AppDownload/>
    
      
    </div>
    

  )
}

export default Home
