import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="qouteContainer">
          <img className="qouteImg" src="/assets/rightbarimg.jpeg" alt="" />
          <span className="qouteText">If you can't feed a hundred people,Then just feed one</span>
        </div>
        <img className="rightbarAd" src="/assets/rightbarimg.jpeg" alt="" />
      </div>
    </div>
  )
}
