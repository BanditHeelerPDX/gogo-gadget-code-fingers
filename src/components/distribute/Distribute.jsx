import "./distribute.css"
import { BsFolderPlusFill } from "react-icons/bs"

export default function Distribute() {
  return (
    <div className="distributeShroud">
        <div className="distributeCloak">
            <div className="distributeAbove">
                <img src="/assets/viking.jpg" alt="" className="distributeProfImg"/>
                <input placeholder="Shout it out, bruv!" className="distributeText" />
            </div>
            <hr className="distributeHr" />
            <div className="distributeBelow">
                <div className="distributeSelections">
                    <div className="distributeSelection">
                        <BsFolderPlusFill className="distributeSelectionIcon" />
                        <span className="distributeSelectionText">Stil or Moving Pictures</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
