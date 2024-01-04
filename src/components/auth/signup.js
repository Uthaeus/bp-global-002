
function SignUp() {

    return (
        <div className="signup">
            <h1 className="signup-title">Sign Up</h1>

            <form className="signup-form">
                <label id='username'>Username</label>
                <input type='text' name='username' />

                <label id='password'>Password</label>
                <input type='password' name='password' />

                <label id='password-confirmation'>Confirm Password</label>
                <input type='password' name='password-confirmation' />
            </form>
        </div>
    );
}

export default SignUp;