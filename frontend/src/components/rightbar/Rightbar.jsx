import "./rightbar.css"

export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const HomeRightbar =() =>{
    return(
      <>
        <div className="qouteContainer">
          <img className="qouteImg" src={`${PF}rightbarimg.jpeg`} alt="" />
          <span className="qouteText">If you can't feed a hundred people,Then just feed one</span>
        </div>
        <img className="rightbarAd" src={`${PF}rightbarimg.jpeg`} alt="" />
      
      </>
    )
  }
  const ProfileRightbar =() =>{
    return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
        <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Contact</span>
            <span className="rightbarInfoValue">{user.contactNumber}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Owner</span>
            <span className="rightbarInfoValue">{user.fullName}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Resturant Type</span>
            <span className="rightbarInfoValue">{user.resturantType}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">landmark</span>
            <span className="rightbarInfoValue">{user.landmark}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Address</span>
            <span className="rightbarInfoValue">{user.address}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Location</span>
            <span className="rightbarInfoValue">location</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ?<ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
