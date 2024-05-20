import Service from "./Service"
import "./OurServices.css"
import { useEffect, useState } from "react"
import ServiceDetails from "./ServiceDetails";

const OurServices = () => {
    const [servicedetails, setservice] = useState(true);
    const [state, setState] = useState("");

    const renderservicedetails = () => {
        setservice(!servicedetails);
    }
    const connectToBackend = async () => {
        let response = await fetch("http://localhost:5173/api/service/fetchAllServices").then(res => res.text()).then(res => setState(res)).then(console.log(state));
        ;
    }

    useEffect(() => {
        connectToBackend();
    }, []);

    if (servicedetails)
        return (
            <div className="servises">
                <h2>Our Services</h2>
                <div className="servisesContainer">
                    <Service renderservicedetails={renderservicedetails} />
                    <Service renderservicedetails={renderservicedetails} />
                    <Service renderservicedetails={renderservicedetails} />
                </div>
            </div>
        )
    else
        return <ServiceDetails />
}
export default OurServices