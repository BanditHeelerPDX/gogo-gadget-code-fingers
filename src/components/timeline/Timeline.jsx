import "./timeline.css"
import Distribute from "../distribute/Distribute"
import Contribute from "../contribute/Contribute"

export default function Timeline() {
  return (
    <div className="timeShroud">
        <div className="timeCloak">
          <Distribute />
          <Contribute />
          <Contribute />
          <Contribute />
          <Contribute />
          <Contribute />
          <Contribute />
          <Contribute />
          <Contribute />
          <Contribute />
          <Contribute />
          <Contribute />
        </div>
    </div>
  )
}
