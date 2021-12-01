import React from 'react'
import { Avatar, Button } from '@material-ui/core'
import './TweetBox.css'
import avatarImg from './assets/emmy.jpg'
import db from './firebase'

const TweetBox = () => {
      const [tweetMessage, setTweetMessage] = React.useState("");
      const [tweetImage, setTweetMessageimage] = React.useState("");

      const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
          displayName: "Mike Alessi",
          username: "alessimg24",
          verified: true,
          text: tweetMessage,
          avatar:
            "https://pbs.twimg.com/profile_images/1339218595931447300/pa789KZI_400x400.jpg",
          image: tweetImage,
        });

        setTweetMessageimage("");
        setTweetMessage("");
      };
    return (
      <div className="tweetBox">
        <form>
          <div className="tweetBox__input">
            <Avatar src={avatarImg} />
            <input
              value={tweetMessage}
              onChange={(e) => setTweetMessage(e.target.value)}
              placeholder="What's happening?"
              type=""
              text
            />
          </div>
          <input
            className="tweetBox__imageInput"
            placeholder="Optional: Enter image URL"
            type=""
            text
            value={tweetImage}
            onChange={(e) => setTweetMessageimage(e.target.value)}
          />
          <Button
            type="submit"
            className="tweetBox__tweetButton"
            onClick={sendTweet}
          >
            Tweet
          </Button>
        </form>
      </div>
    );
}

export default TweetBox
