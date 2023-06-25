import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"
import { AuthContext } from "../../context/AuthContext";
import { useContext, useRef, useState } from "react";
import axios from "axios";


export default function Share() {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const foodType = useRef();
  const mealTime = useRef();
  const pickUpTime = useRef();
  const [file, setFile] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      desc: desc.current.value,
      foodType:foodType.current.value,
      mealTime:mealTime.current.value,
      pickUpTime:pickUpTime.current.value,
      key:user.username + "-" +new Date().getDate() + "-" +mealTime.current.value
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        const  res= await axios.post("/upload", data);
        //console.log(res)
      } catch (err) {}//console.log(err)}
    }
    try {
      const res =await axios.post("/post/createPost", newPost);
      //console.log(res)
      window.location.reload();
    } catch (err) {}//console.log(err)
  };


  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={`${PF}person/image1`} alt="" />
          <input 
          placeholder={"What you wanna share next,"+user.username+"?"} 
          className="shareInput" 
          ref={desc}
          required
          />
          <select className="foodType" ref={foodType} required>
            <option >Food Type</option>
            <option >Veg</option>
            <option >Non-Veg</option>
          </select>
          <select className="mealTime" ref={mealTime} required>
            <option >Meal Time</option>
            <option >M</option>
            <option >L</option>
            <option >D</option>
          </select>
          <input
            type="time" className="pickUpTime" required ref={pickUpTime}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
          <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  )
}
