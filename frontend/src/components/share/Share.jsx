import "./share.css"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/person/image1" alt="" />
                <input placeholder="What's in your mind ?" className="shareInput"/>
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    
                </div>
            </div>
        </div>
    </div>
  )
}
