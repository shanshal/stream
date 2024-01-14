import classes from "./Register.module.css";

export function Testing() {
    return (
        <>
            <form action="" className="form">
                <h3>Register</h3>
                <label className="text">
                    Name<span className={classes.star}>*</span>
                </label>
                <input
                    type="text"
                    placeholder=""
                    className="text"
                    name="name"
                    onChange={onChangeInput}
                    onBlur={blurHandler}
                    value={state.name}
                />
                {!inputsValid.name && state.nametouched && (
                    <p className={classes.errorText}>Name must not be empty!</p>
                )}
                <label className="text">
                    Email<span className={classes.star}>*</span>
                </label>
                <input
                    type="text"
                    placeholder=""
                    className="text"
                    name="emailaddress"
                    onChange={onChangeInput}
                    onBlur={blurHandler}
                    value={state.emailaddress}
                />
                {!inputsValid.emailaddress && state.emailaddresstouched && (
                    <p className={classes.errorText}>Must not be empty!</p>
                )}
                <label className="text">
                    Password<span className={classes.star}>*</span>
                </label>
                <input
                    type="password"
                    placeholder="More than 8 characters"
                    className="text"
                    name="password"
                    onChange={onChangeInput}
                    onBlur={blurHandler}
                    value={state.password}
                />

                {!inputsValid.password && state.passwordtouched && (
                    <p className={classes.errorText}>Password must not be empty!</p>
                )}
                <div className={classes.button}>
                    {" "}
                    <button onClick={onSubmit} disabled={!inputsValid.emailaddress || !inputsValid.password}>Confirm
                    </button>
                </div>
            </form>
        </>
    )
}