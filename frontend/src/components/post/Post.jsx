import "./post.css"
import { MoreVert } from "@material-ui/icons"
import { useState , useEffect } from "react"
import axios from "axios"
import { format } from "timeago.js"
import { Link } from "react-router-dom"

export default function Post({post}) {
    const [user,setUser] = useState([]);
    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/resturant/getResturantByUsername?username=${post.resturantUsername}`)
            setUser(res.data.Resturant)
            //console.log(res.data.Resturant)
        };
        fetchUser();
    },[post.resturantUsername]);

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img className="postProfileImg"
                            src={`${PF}rightbarimg.jpeg`}
                            alt="" />
                        </Link>
                        <span className="postUsername">{user.resturantName}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" 
                    src={`${PF}rightbarimg.jpeg`}
                    alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
                        <img className="likeIcon" src={`${PF}heart.jpeg`} onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
