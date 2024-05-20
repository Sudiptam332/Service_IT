import simg from "../assets/serviceDetails1.jpg"
import "./ServiceDetails.css"
import { Link } from "react-router-dom"
import Buy from "./Buy"
import React, { useEffect, useState } from "react";


const ServiceDetails = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };




    return (
        <div className="sdContainer">
            <div className="sdLeft">
                <img src={simg} alt="" />
                <h2>Ms Office</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, eveniet dolorum animi porro debitis modi deleniti sed velit omnis reprehenderit numquam suscipit ipsum, soluta obcaecati voluptas voluptatem! Officiis reiciendis, nobis, quo eligendi qui facilis voluptatibus, tenetur accusamus harum fugiat et? Molestiae, et totam, dignissimos exercitationem facere iste ducimus, non nihil illo ad dolores nostrum dolorum accusantium sit laboriosam eius fuga minus necessitatibus tenetur est! Consectetur, asperiores rem! Earum debitis placeat quisquam, praesentium similique quia? </p>
            </div>
            <div className="sdRight">
                <div className="addService">
                    <h3>Services Icluded</h3>
                    <ul>
                        <li>Ms Excel</li>
                        <li>Ms Word</li>
                        <li>Ms PowerPoint</li>
                        <li>Ms Outlook</li>
                    </ul>
                </div>
                <div className="pricing">
                    <h3>Price</h3>
                    <span>Base Price - 10000 /-</span>
                    <p>Price depend on some condition, contact with us, to get more infomation.</p>
                </div>
                <div className="Duration">
                    <h3>Duration</h3>
                    <span>Noramal - 10 - 12 Month</span>
                    <p>It may be increased, as per the Demand.</p>
                </div>
                <Link to="/cart" className="btn btn-success">Add to Cart</Link>
                <button onClick={toggleModal} className="btn btn-primary">Book Service</button>
            </div>
            {modal && <Buy toggleModal={toggleModal} />}
        </div>
    )
}

export default ServiceDetails