import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

// Icons
import {
  Twitter,
  MoreHoriz,
  Search,
  Home,
  NotificationsNone,
  MailOutline,
  BookmarkBorder,
  ListAlt,
  PermIdentity,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Twitter className="sidebar__twitterIcon"/>
      <SidebarOption active Icon={Home} text="Home" />
      <SidebarOption Icon={Search} text="Explore" />
      <SidebarOption Icon={NotificationsNone} text="Notifications" />
      <SidebarOption Icon={MailOutline} text="Messages" />
      <SidebarOption Icon={BookmarkBorder} text="Bookmark" />
      <SidebarOption Icon={ListAlt} text="Lists" />
      <SidebarOption Icon={PermIdentity} text="Profile" />
      <SidebarOption Icon={MoreHoriz} text="More" />

      <Button variant="outlined" className="sidebar_tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};
