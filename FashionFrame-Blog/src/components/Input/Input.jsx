const Input = ({ type, placeholder, icon: Icon }) => (
    <div className="input-box">
        <input type={type} placeholder={placeholder} required />
        <Icon className='icon'/>
    </div>
);

export default Input;
