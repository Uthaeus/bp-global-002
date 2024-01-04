
function Login() {

    return (
        <div className="login">
            <h1 className="login-title">Login</h1>

            <form>
                <label id='username'>Username</label>
                <input type='text' name='username' />

                <label id='password'>Password</label>
                <input type='password' name="password" />
            </form>
        </div>
    )
}

export default Login;