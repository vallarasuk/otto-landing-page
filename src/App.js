import React from 'react'
import Header from './Components/Header'
import Content from './Components/Content'
import SecondSlideContent from './Components/ContentSection/SecondSlideContent'
import ThirdSlideContent from './Components/ContentSection/ThirdSlideContent'
import FourthSectionContent from './Components/ContentSection/FourthSectionContent'

const App = () => {
  return (
    <>
     <div className="container">
    <Header/><Content/><SecondSlideContent/><ThirdSlideContent/><FourthSectionContent/>
      </div> 
    </>
  )
}

export default App

