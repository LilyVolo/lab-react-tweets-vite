import  React from "react"
import ProfileImage from "./ProfileImage"
import User from "./User"
import Timestamp from "./Timestamp"
import Actions from "./Actions";
import Message from "./Message";

function Tweet(props) {

  console.log(props.tweet)
  return (
    <div className="tweet">
      	<ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">
         <User name={props.tweet.user.name} handle={props.tweet.user.handle}/>

         <Timestamp time={props.tweet.timestamp} />
         {console.log(props.tweet.timestamp, 'check')}
        </div>
      < Message message={props.tweet.message}/>

      <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
