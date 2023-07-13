import "./sideLeft.css"
import Calendar from "react-calendar"

export default function SideLeft() {
  return (
    <div className="sideLeftShroud">
      <div className="sideLeftCloak">
        <div className="sideLeftAbove">
          <div className="sideLeftCalendar">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  )
}
