import '../../styles/VolumeControl.css'
import { VscChromeMaximize, VscChromeMinimize, VscChromeClose } from 'react-icons/vsc'
import { LiaVolumeUpSolid } from 'react-icons/lia'
import PropTypes from 'prop-types'

const VolumeControl = ({ volume, setVolume }) => {
  const handleVolumeChange = (event) => {
    setVolume(event.target.value)
  }

  return (
    <div className="volume-control">
      <div className="window-controls">
        <div className="volume-label">
          <LiaVolumeUpSolid className="volume-icon" />
          <span className="volume-text">Volume!</span>
        </div>
        <div className="control-buttons">
          <button className="minimize">
            <VscChromeMinimize className="minimize-icon" />
          </button>
          <button className="maximize">
            <VscChromeMaximize className="maximize-icon" />
          </button>
          <button className="close">
            <VscChromeClose className="close-icon" />
          </button>
        </div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className="volume-slider"
      />
      <div className="volume-display">{volume}%</div>
    </div>
  )
}

VolumeControl.propTypes = {
  volume: PropTypes.number.isRequired,
  setVolume: PropTypes.func.isRequired
}

export default VolumeControl
