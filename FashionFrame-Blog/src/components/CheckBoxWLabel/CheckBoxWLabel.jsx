export const CheckBoxWithLabel = ({ label, isChecked }) => (
    <div className="remember-forgot">
        <label><input type='checkbox' defaultChecked={isChecked} />{label}</label>
    </div>
)

export default CheckBoxWithLabel
