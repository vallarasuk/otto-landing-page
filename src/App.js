import React from 'react'
import Header from './Components/Header'
import Content from './Components/Content'
import SecondSlideContent from './Components/ContentSection/SecondSlideContent'
import ThirdSlideContent from './Components/ContentSection/ThirdSlideContent'

const App = () => {
  return (
    <>
     <div className="container">
    <Header/><Content/><SecondSlideContent/><ThirdSlideContent/>
      </div> 
    </>
  )
}

export default App

