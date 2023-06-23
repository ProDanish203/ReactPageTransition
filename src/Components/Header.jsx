import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className='flex items-center text-white justify-between gap-2 sm:px-10 px-5 py-2 pt-5'>
        <div className="text-3xl font-bold logo">
            <Link to="/">LOGO</Link>
        </div>
        <nav className="sm:mr-5">
            <ul className="flex items-center justify-center gap-6">
                <li className="text-2xl cursor-pointer hover:text-red-200">
                    <Link to="/">Home</Link>
                </li>
                <li className="text-2xl cursor-pointer hover:text-red-200">
                    <Link to="/about">About</Link>
                </li>
                <li className="text-2xl cursor-pointer hover:text-red-200">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
