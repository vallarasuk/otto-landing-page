import React from 'react'
import Header from './Components/Header'
import Content from './Components/Content'
import SecondSlideContent from './Components/ContentSection/SecondSlideContent'

const App = () => {
  return (
    <>
     <div className="container">
    <Header/><Content/><SecondSlideContent/>
      </div> 
    </>
  )
}

export default App

