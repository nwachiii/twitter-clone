import React from 'react'
import './Feed.css'
import Post from './Post';
import TweetBox from './TweetBox';
import db from "./firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
      const [posts, setPosts] = React.useState([]);

      React.useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => doc.data()))
        );
      }, []);
    return (
      <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>

        <TweetBox />
        <Post
          displayName="Adekoya Toluwalase"
          username="omoadekoya"
          verified={true}
          text="My babe is a freaking genius"
          avatar="https://images.unsplash.com/photo-1600880291599-c5eca68b88b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwYmFieXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          image="https://images.unsplash.com/photo-1596510914914-e14c6f59f925?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBiYWJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Post
          displayName="Tejumade Joseph"
          username="TejjyJoe"
          text="Omo!! I can't come and go and kill my self in this life"
          avatar="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theguardian.com%2Fworld%2F2020%2Faug%2F17%2Fblack-babies-survival-black-doctors-study&psig=AOvVaw27rvEZGo5RrIRK1FOidq-V&ust=1638401397306000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiF9IefwfQCFQAAAAAdAAAAABAI"
          image="https://media0.giphy.com/media/Zd0DYHlBmZTGaiIFRY/200.webp?cid=ecf05e47zz6xdtqfvuqnghn850a3qzzfesmvzsvh6q9rv8ec&rid=200.webp&ct=g"
        />
        <Post
          displayName="Ebube Chidiogor"
          username="ebby"
          verified={true}
          text="My babe is a freaking genius"
          avatar=""
          image="https://giphy.com/clips/toprank-boxing-boxer-tyson-fury-N5AvIfIitPTOtw0CDt"
        />
        <FlipMove>
          {posts.map((post) => (
            <Post
              key={post.text}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          ))}
        </FlipMove>
      </div>
    );
}

export default Feed
