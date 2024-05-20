import "./Service.css"
import service1 from "../assets/service1.jpeg"
import { Link } from "react-router-dom"

const Service = ({ renderservicedetails }) => {
    return (
        <div className="serviceContainer">
            <img src={service1} alt="" />
            <h4>Ms Office</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut ab officiis.</p>
            <Link to="/servicedetails" className="btn btn-dark" onClick={renderservicedetails}>See Details</Link>
        </div>
    )
}
export default Service