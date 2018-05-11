import React from "react";
import Iomore from "react-icons/lib/io/more";
import Description from "./description";
import Nameoverlay from "./nameoverlay";
import { formatString } from "../../utils/helpers";

const bio = ({
  myStyle,
  firstName,
  lastName,
  state,
  country,
  profilelink,
  bio,
  show,
  click,
  profilePicture
}) => (
  <div className="contestant--profile">
    <div className="contestant--cont">
      <div className="contestant--image bio--aspect--ratio" style={myStyle}>
        <Nameoverlay
          firstName={firstName}
          lastName={lastName}
          profilePicture={profilePicture}
        />
        <div className="image--overlay">
          {firstName ? (
            <div className="bio-buttons">
              <span className="to-hide">
                <Description
                  name={formatString(`${firstName} ${lastName}`)}
                  state={state}
                  country={country}
                  profilelink={profilelink}
                  click={click}
                  show={show}
                />
              </span>
              <span className="Vote--button">
                Vote {formatString(firstName)}
              </span>
              <span className="more--button">
                <Iomore />
              </span>
            </div>
          ) : null}
        </div>
      </div>
      {bio ? (
        <div className="contestant--bio bio--aspect--ratio">
          <span className="mydetail--header">ABOUT</span>
          <span className="mydetail">{bio}</span>
        </div>
      ) : null}
    </div>
  </div>
);

export default bio;