import { useState , useEffect ,useContext } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from "axios"
//import { Posts } from "../../dummydata";
import { AuthContext } from "../../context/AuthContext";


export default function Feed({username}) {
  const [posts,setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(()=>{
    const fetchPosts = async () => {
      try {
        const res = username 
        ? await axios.get("/post/getPostByUsername/"+username)
        : await axios.get("/post/getListOfPost");

        setPosts(
          res.data.Posts.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
        //setPosts(res.data.Posts);
        //console.log(res.data.Posts)
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };
    
  
    fetchPosts();
    //console.log(posts);
  },[username]);

  return (
    <div className="feed">
        <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
          {Array.isArray(posts) &&
            posts.map((p) => <Post key={p.key} post={p} />)}
          {/* {posts.Posts.map((p) => (
            <Post key={p.key} post={p} />
          ))} */}
        </div>
    </div>
  )
}
