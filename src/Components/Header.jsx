import React from 'react'
import Button from './Button/Button'

const Header = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-5 justify-content-around d-flex pt-5 mt-4 fw-bold header-nav">
                <a href="https://withotter.com/parents" className="text-decoration-none">Parents</a>
                <a href="https://withotter.com/parents" className="text-decoration-none">Sitters</a>
                <a href="https://withotter.com/trust-safety" className="text-decoration-none">Trust and Safety</a>
                <a href="https://withotter.com/trust-safety" className="text-decoration-none">Blog</a>
            </div>
            <div className="col-2 text-center  my-5">
              <a href="https://withotter.com/" className='logo text-decoration-none p-3 ' >otter</a>
            </div>
            <div className="col-4 py-5 justify-content-end d-flex my-3 mb-4">
              <a href="https://app.withotter.com/log-in?device-id=zV2leBbFxJ7xn0FYHcVKtO" className="fw-bold mx-2 text-decoration-none btn " style={{ color: "var(--text-color)" }}>Log in</a>
            
              <Button link={"https://app.withotter.com/log-in?device-id=zV2leBbFxJ7xn0FYHcVKtO"} buttonText={"Sign up"}/>
            </div>
        </div>
      
    </div>
  )
}

export default Header
