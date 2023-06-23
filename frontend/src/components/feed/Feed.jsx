import { useState , useEffect } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from "axios"
//import { Posts } from "../../dummydata";

export default function Feed({username}) {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () => {
      try {
        const res = username 
        ? await axios.get("/post/getPostByUsername/"+username)
        : await axios.get("/post/getListOfPost");
        setPosts(res.data);
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
          <Share/>
          {Array.isArray(posts.Posts) &&
            posts.Posts.map((p) => <Post key={p.key} post={p} />)}
          {/* {posts.Posts.map((p) => (
            <Post key={p.key} post={p} />
          ))} */}
        </div>
    </div>
  )
}
