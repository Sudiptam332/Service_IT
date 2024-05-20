import React from "react";
import { useState } from "react";
import ImageSlider from "./ImageSlider";
import OurServices from "./OurServices";

const Home = () => {
    const [flag, setflag] = useState(true);
    //this function decides which component to render
    const getvalue = (e) => {
        setflag(!flag);
    }

    if (flag)
        return <ImageSlider getvalue={getvalue} />
    else
        return <OurServices />
}

export default Home;