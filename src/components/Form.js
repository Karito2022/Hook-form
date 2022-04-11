import React from "react";

const Form = props => {
    const { inputs, setInputs } = props;
    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: "target value inside input"
        });
    };
return (
    <form>
        <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input onChange={onChange} type="text" name="firstName" />
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input onChange={onChange} type="text" name="lastName" />
        </div>
        <label htmlFor="email">Email</label>
        <input onChange={onChange} type="text" name="email" />
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={onChange} type="text" name="password" />
        </div>
        <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={onChange} type="text" name="confirmPassword" />
        </div>
    </form>
);
};

export default Form;