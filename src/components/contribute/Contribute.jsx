import "./contribute.css";
import {
  BsFillGrid3X3GapFill,
  BsHandThumbsUpFill,
  BsHeartFill,
  BsJoystick,
} from "react-icons/bs";

export default function Contribute() {
  return (
    <div className="contributeShroud">
      <div className="contributeCloak">
        <div className="contributeAbove">
          <div className="contributeAboveLeft">
            <BsFillGrid3X3GapFill className="contributeIcon" />
          </div>
          <div className="contributeAboveRight">
            <span className="contributeUsername">Frank Stallone</span>
            <img
              src="/assets/viking.jpg"
              alt=""
              className="contributeProfImg"
            />
            <span className="contributeDate">4 score and 7 years ago</span>
          </div>
        </div>
        <div className="contributeMiddle">
          <span className="contributeText">Time for a proclamation!</span>
          <img src="/assets/viking.jpg" alt="" className="contributeImg" />
        </div>
        <div className="contributeBelow">
          <div className="contributeBelowRight">
            <div className="contributeSelections">
              <div className="contributeSelection">
                <BsHandThumbsUpFill className="contributeSelectionIcon" />
                <span className="contributeSelectionText">Good</span>
              </div>
              <div className="contributeSelection">
                <BsHeartFill className="contributeSelectionIcon" />
                <span className="contributeSelectionText">Better</span>
              </div>
              <div className="contributeSelection">
                <BsJoystick className="contributeSelectionIcon" />
                <span className="contributeSelectionText">Best</span>
              </div>
            </div>
          </div>
          <div className="contributeBelowLeft">
            <span className="contributeCommentsCount">6 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
