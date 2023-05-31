import React from 'react'
import Header from './Components/Header'
import Content from './Components/Content'
import SecondSlideContent from './Components/ContentSection/SecondSlideContent'
import ThirdSlideContent from './Components/ContentSection/ThirdSlideContent'
import FourthSectionContent from './Components/ContentSection/FourthSectionContent'
import WhyOtterSection from './Components/ContentSection/WhyOtterSection'
import RowSectionContent from './Components/ContentSection/RowSectionContent'
import CommonSectionContent from './Components/ContentSection/CommonSectionContent'

const App = () => {
  return (
    <>
      <div className="container">
        <Header /><Content /><SecondSlideContent /><ThirdSlideContent /><FourthSectionContent /><WhyOtterSection /><RowSectionContent /><CommonSectionContent />
      </div>
    </>
  )
}

export default App

