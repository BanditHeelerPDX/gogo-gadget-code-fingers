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
        <div className="sideLeftMiddle">
          <h3 className="sideLeftIAHeader">Interweb Acquaintances</h3>
          <ul className="sideLeftIAList">
            {Users.map((u) => (
              <Interweb key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
