import { Link } from "react-router-dom"

function PageNotFoundView(props) {
    return <div>
        <h1>Page not found!</h1>
        <img src="Bubo_small.png" height="200px" alt="" /><br/>
        <Link to={"/Login"}>Try to go to login and start from there :)</Link>
    </div>
}

export default PageNotFoundView;