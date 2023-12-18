import { Link } from "react-router-dom";

function ErrorPage() {

    return (
        <div className="errorpage">
            <h1 className="error-title">Oops! There has been an error</h1>

            <Link className="error-link" to='/'>return to homepage</Link>
        </div>
    );
}

export default ErrorPage;