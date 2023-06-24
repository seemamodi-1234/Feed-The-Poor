import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    //console.log(userCredential.userType)
    let res={}
    if(userCredential.userType==="Resturant"){res= await axios.post("/resturant/resturantSignIn", userCredential);}
    else if (userCredential.userType==="User"){res = await axios.post("/user/userSignIn", userCredential);}
    console.log(res)
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
