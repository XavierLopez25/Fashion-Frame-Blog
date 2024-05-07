import PropTypes from 'prop-types'
export const CheckBoxWithLabel = ({ label, isChecked }) => (
  <div className="remember-forgot">
    <label>
      <input type="checkbox" defaultChecked={isChecked} />
      {label}
    </label>
  </div>
)

CheckBoxWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired
}

export default CheckBoxWithLabel
