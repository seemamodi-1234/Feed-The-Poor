import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import { useState , useEffect,useContext } from "react"
import axios from "axios"
import { useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
    const [user,setUser] = useState([]);
    const username = useParams().username;
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(() => {
        const fetchUser = async () => {
            
            const res = await axios.get(`/resturant/getResturantByUsername?username=${username}`)
            setUser(res.data.Resturant)
            //console.log(res.data.Resturant)
        };
        fetchUser();
    },[]);

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={`${PF}post.jpeg`} alt="" />
                            <img className="profileUserImg" src={`${PF}person/image1`} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.fullName}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username}/>
                        <Rightbar user={user}/>
                    </div>
                </div>
            </div>
        </>
    )
}
