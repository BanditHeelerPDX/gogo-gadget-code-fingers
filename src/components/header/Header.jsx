import "./header.css";
import {
  BsSearchHeart,
  BsFillPersonFill,
  BsChatLeftQuoteFill,
  BsFillBellFill,
} from "react-icons/bs";

export default function Header() {
  return (
    <div className="headerShroud">
      <div className="headerLeft">
        <div className="headerLinks">
          <span className="headerLink">Home</span>
          <span className="headerLink">Profile</span>
        </div>
        <div className="headerIcons">
          <div className="headerIcon">
            <BsFillPersonFill />
            <span className="headerIconFlag">1</span>
          </div>
          <div className="headerIcon">
            <BsChatLeftQuoteFill />
            <span className="headerIconFlag">3</span>
          </div>
          <div className="headerIcon">
            <BsFillBellFill />
            <span className="headerIconFlag">3</span>
          </div>
        </div>
        <div className="headerCenter">
          <div className="searchBar">
            <BsSearchHeart className="searchIcon" />
            <input
              placeholder="What is shaking on the streets?"
              className="searchInput"
            />
          </div>
          <div className="headerRight">
            <span className="logo">Phonebook</span>
          </div>
        </div>
      </div>
    </div>
  );
}
