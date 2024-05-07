import PropTypes from 'prop-types'

const FormLink = ({ message, actionLink, actionText, onClick }) => (
  <div className="register-link">
    <p>
      {message}{' '}
      <a href={actionLink} onClick={onClick}>
        {actionText}
      </a>
    </p>
  </div>
)

FormLink.propTypes = {
  message: PropTypes.string.isRequired,
  actionLink: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default FormLink
