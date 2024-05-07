const FormLink = ({ message, actionLink, actionText, onClick }) => (
    <div className='register-link'>
        <p>{message} <a href={actionLink} onClick={onClick}>{actionText}</a></p>
    </div>
)

export default FormLink
