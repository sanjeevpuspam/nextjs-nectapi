import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter()
  return (
    <div className="container">
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/users">Home</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    </div>
  )
}

export default Navbar
