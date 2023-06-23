const PF = process.env.REACT_APP_PUBLIC_FOLDER
export const Users = [
    {
      id:1,
      profilePicture: PF+"person/image1",
      username: "r-111",
    },
    {
      id:2,
      profilePicture: PF+"person/image1",
      username: "Janell Shrum",
    },
    {
      id:3,
      profilePicture: PF+"person/image1",
      username: "Alex Durden",
    }
]
export const Posts = [
    {
      id: 1,
      desc: "Love For All, Hatred For None.",
      photo: "person/image1",
      date: "5 mins ago",
      userId: 1,
      like: 32,
      comment: 9,
    },
    {
      id: 2,
      photo: "person/image1",
      date: "15 mins ago",
      userId: 2,
      like: 2,
      comment: 1,
    },
    {
      id: 3,
      desc: "Every moment is a fresh beginning.",
      photo: "person/image1",
      date: "1 hour ago",
      userId: 3,
      like: 61,
      comment: 2,
    }
]