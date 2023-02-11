import React from "react";
import classes from "../track/track.module.css";
import TrackList from "./trackList/trackList";
import { cardInfo } from "../../constant";
const Track = () => {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.track}>
          <div className={classes.heading}>
            <h2>Track any hashtag(s) Performance</h2>
            <p>
              Don’t waste time on search manual tasks. Let Automation do it for
              you. Simplify workflows, reduce errors, and save time.
            </p>
          </div>
          <div className={classes.cards}>
            {cardInfo.map((item, i) => (
                <TrackList {...item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Track;
