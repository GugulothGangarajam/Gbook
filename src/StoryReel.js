import React from "react";
import image1 from "./images/image5.jpg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3 (1).jpeg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import profilesrc1 from "./images/image5.jpg";
import profilesrc2 from "./images/profilesrc2.jpg";
import profilesrc3 from "./images/profilesrc3.jpg";
import profilesrc4 from "./images/profilesrc4.jpg";
import profilesrc5 from "./images/profilesrc5.jpg";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image={image1} profilesrc={profilesrc1} title="Rishi " />
      <Story image={image2} profilesrc={profilesrc2} title="Raj" />
      <Story image={image3} profilesrc={profilesrc3} title="Dheeraj" />
      <Story image={profilesrc4} profilesrc={image4} title="Arjun Nayak" />
      <Story image={image5} profilesrc={profilesrc5} title="Sunny Austin" />
    </div>
  );
}

export default StoryReel;
