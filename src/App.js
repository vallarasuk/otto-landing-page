import React from 'react'
import Header from './Components/Header'
import Content from './Components/Content'
import ThirdSlideContent from './Components/ContentSection/ThirdSlideContent'
import FourthSectionContent from './Components/ContentSection/FourthSectionContent'
import WhyOtterSection from './Components/ContentSection/WhyOtterSection'
import RowSectionContent from './Components/ContentSection/RowSectionContent'
import CommonSectionContent from './Components/ContentSection/CommonSectionContent'
import FooterSectionContent from './Components/ContentSection/FooterSectionContent'
import HowIsItSection from './Components/ContentSection/HowIsItSection'

const App = () => {
  return (
    <>
      <div className="container">
        <Header /><Content /><HowIsItSection />  <ThirdSlideContent /><FourthSectionContent /><WhyOtterSection /><RowSectionContent /><CommonSectionContent /><FooterSectionContent />
      </div>
    </>
  )
}

export default App

