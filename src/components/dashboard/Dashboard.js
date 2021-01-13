import React from 'react'
import { Link } from 'react-router-dom'
import "./../../assets/css/dashboard.css"
import NavbarComponent from './navbar'
import navIconInfo from "./../../assets/img/navIconInfo.png"
import navIconSettings from "./../../assets/img/navIconSettings.png"
import navIconMap from "./../../assets/img/navIconMap.png"

const Dashboard = () => {
    return (
        <>
        <NavbarComponent/>
        <br/>
        <div className="container-dashboard">
            <div className="row">
                <div className="col-md-12" >
                    <div className="type">
                        Welcome to the presentation of the test
                    </div>
                </div>                
            </div>        
        </div> 
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-md-4 text-center">
                    <Link to="/business-map" className="hvr-grow">
                    <div className="card card-middleware">
                        <div className="card-body">
                            <img src={navIconMap} alt="icon-section-map" width="100" />
                                <div className="text-center">
                                    <br />
                                    <p style={{ fontSize: "18px" }}>Business Map Section</p>
                                </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-md-4 text-center">
                    <Link to="/about-treinta" className="hvr-grow">
                        <div className="card card-middleware">
                            <div className="card-body">
                                <img src={navIconInfo} alt="icon-section-map" width="100" />
                                    <div className="text-center">
                                    <br />
                                    <p style={{ fontSize: "18px" }}>Section About Treinta</p>
                                    </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 text-center">
                    <Link to="/profile" className="hvr-grow">
                        <div className="card card-middleware">
                            <div className="card-body">
                                <img src={navIconSettings} alt="icon-section-map" width="100" />
                                    <div className="text-center">
                                    <br />
                                    <p style={{ fontSize: "18px" }}>Profile settings</p>
                                    </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard
