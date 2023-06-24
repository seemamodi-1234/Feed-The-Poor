import React, { useRef, useContext } from "react";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./userInfo.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function UserInfo() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const firstNameRef = useRef();
    const middleNameRef = useRef();
    const lastNameRef = useRef();
    const areaRef = useRef();
    const districtRef = useRef();
    const pincodeRef = useRef();
    const cityRef = useRef();
    const countryRef = useRef();
    const addressRef = useRef();
    const landmarkRef = useRef();
    const contactNumberRef = useRef();
    const locationRef = useRef();
    const resturantNameRef = useRef();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const update = {
            firstName: firstNameRef.current.value,
            middleName: middleNameRef.current.value,
            lastName : lastNameRef.current.value,
            fullName : firstNameRef.current.value + lastNameRef.current.value,
            area : areaRef.current.value,
            district : districtRef.current.value,
            pincode : pincodeRef.current.value,
            city : cityRef.current.value,
            country : countryRef.current.value,
            address : addressRef.current.value,
            landmark : landmarkRef.current.value,
            contactNumber : contactNumberRef.current.value,
            location : locationRef.current.value,
            resturantName : resturantNameRef.current.value
        }
        const argument ={
            username:user.username,
            update:update
        }
        if (user.userType === "Resturant") {
            try {
                const res = await axios.post("/resturant/updateResturant", argument);
                console.log(res.data)
                navigate(`/`);
            } catch (err) {
                console.log(err);
            }
        }
        else if(user.userType === "User"){
            try {
                const res =await axios.post("/user/updateUser", argument);
                navigate(`/`);
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <>
            <Topbar />
            <div className="info">
                <Sidebar />
                <div className="infoRight">
                    <h4>Update Your Information</h4>
                    <form onSubmit={handleFormSubmit}>
                        <div className="row">
                            <input
                                ref={firstNameRef}
                                className="infoInput"
                                placeholder="First Name"
                                required
                            />
                            <input
                                ref={middleNameRef}
                                className="infoInput"
                                placeholder="Middle Name"
                            />
                        </div>
                        <div className="row">
                            <input
                                ref={lastNameRef}
                                className="infoInput"
                                placeholder="Last Name"
                                required
                            />
                            <input
                                value={user.username}
                                className="infoInput"
                                placeholder="Username"
                            />
                        </div>
                        <div className="row">
                            <input
                                className="infoInput"
                                placeholder="Email"
                                type="email"
                                value={user.email}
                            />
                            <input
                                className="infoInput"
                                placeholder="UserType"
                                value={user.userType}
                            />

                        </div>
                        <div className="row">
                            <input ref={areaRef}
                                className="infoInput"
                                placeholder="Area"
                            />
                            <input
                                ref={pincodeRef}
                                className="infoInput"
                                placeholder="Pincode"
                                type="number"
                            />
                        </div>
                        <div className="row">
                            <input ref={cityRef} className="infoInput" placeholder="City" />
                            <input
                                ref={countryRef}
                                className="infoInput"
                                placeholder="Country"
                            />
                        </div>
                        <div className="row">
                            <input
                                ref={addressRef}
                                className="infoInput"
                                placeholder="Address"
                            />
                            <input
                                ref={landmarkRef}
                                className="infoInput"
                                placeholder="Landmark"
                            />
                        </div>
                        <div className="row">
                            <input
                                ref={contactNumberRef}
                                className="infoInput"
                                placeholder="Contact Number"
                                type="number"
                                required
                            />
                            <input
                                ref={locationRef}
                                className="infoInput"
                                placeholder="Location"
                            />
                        </div>
                        <div className="row">
                            <input
                                ref={districtRef}
                                className="infoInput"
                                placeholder="District"
                            />
                            <input
                                ref={resturantNameRef}
                                className="infoInput"
                                placeholder="Resturant Name"
                            />
                        </div>
                        <button className="infoButton" type="submit">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

