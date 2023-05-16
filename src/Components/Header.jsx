import React from 'react'

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
            <div className="col-2 mt-4 text-center ms-5 ">
              <a href="https://withotter.com/"><img src="https://assets.website-files.com/6424ac4b25764708c6aa49f7/642e39266f382a63e8e7e853_Otter%20Icon.png" alt="Otto" width={"100%"}  height={"70%"}/></a>
            </div>
            <div className="col-4 py-5 justify-content-end d-flex my-4">
              <a href="https://app.withotter.com/log-in?device-id=zV2leBbFxJ7xn0FYHcVKtO" className="fw-bold mx-2 text-decoration-none btn ">Log in</a>
              
              <a href="https://app.withotter.com/log-in?device-id=zV2leBbFxJ7xn0FYHcVKtO" className="fw-bold mx-2 text-decoration-none btn btn-outline-secondary rounded-5 mx-2">Sign up</a>
            </div>
        </div>
      
    </div>
  )
}

export default Header
