import React from 'react'
import PropTypes from 'prop-types'

const Input = React.forwardRef(({ type, placeholder, icon: Icon, ...rest }, ref) => {
  return (
    <div className="input-box">
      {Icon && <Icon className="icon" />}
      <input type={type} placeholder={placeholder} ref={ref} {...rest} />
    </div>
  )
})

Input.displayName = 'Input'

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.elementType
}

export default Input
