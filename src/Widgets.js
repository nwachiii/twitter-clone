import React from 'react'
import './Widgets.css'

import { TwitterTweetEmbed, TwitterTimelineEmbed, TwitterShareButton } from "react-twitter-embed";

import SearchIcon from "@material-ui/icons/Search";

const Widgets = () => {
    return (
      <div className="widgets">
        <h2>widgets</h2>
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>
        <div className="widgets__widgetContainer">
          <h2>What's happening?</h2>
          <TwitterTweetEmbed tweetId={"1342933490275385347"} />
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="nwachiii"
            options={{ height: 400 }}
          />
          <TwitterShareButton url={"https://www.facebook.com/temofedev"} options={{text: '#reactjs is the best', via: 'nwachiii'}}/>
        </div>
      </div>
    );
}

export default Widgets
