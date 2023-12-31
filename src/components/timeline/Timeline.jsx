import "./timeline.css";
import Distribute from "../distribute/Distribute";
import Contribute from "../contribute/Contribute";
import { Posts } from "../../dummyData";

export default function Timeline() {
  return (
    <div className="timeShroud">
      <div className="timeCloak">
        <Distribute />
        {Posts.map((p) => (
          <Contribute key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
