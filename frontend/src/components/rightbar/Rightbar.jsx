import "./rightbar.css"

export default function Rightbar({profile}) {
  const HomeRightbar =() =>{
    return(
      <>
        <div className="qouteContainer">
          <img className="qouteImg" src="/assets/rightbarimg.jpeg" alt="" />
          <span className="qouteText">If you can't feed a hundred people,Then just feed one</span>
        </div>
        <img className="rightbarAd" src="/assets/rightbarimg.jpeg" alt="" />
      
      </>
    )
  }
  const ProfileRightbar =() =>{
    return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Kolkata</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From</span>
            <span className="rightbarInfoValue">WestBengal</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ?<ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
