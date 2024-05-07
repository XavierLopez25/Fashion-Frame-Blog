import React from 'react';

const Input = React.forwardRef(({ type, placeholder, icon: Icon, ...rest }, ref) => {
  return (
    <div className="input-box">
      {Icon && <Icon className="icon" />}
      <input type={type} placeholder={placeholder} ref={ref} {...rest} />
    </div>
  );
});

export default Input;
