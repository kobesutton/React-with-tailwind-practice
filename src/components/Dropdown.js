import { Link } from "react-router-dom"


const Dropdown = ({ toggle, dropdown}) => {
    return (
        <div className={dropdown ? 'grid grid-rows-4 text-center bg-blue-400 ' : 'hidden'} onClick={toggle}>
            <Link className="p-4 hover:animate-pulse" to='/'>Home</Link>
            <Link className="p-4 hover:animate-pulse" to='/menu'>Menu</Link>
            <Link className="p-4 hover:animate-pulse" to='/about'>About</Link>
            <Link className="p-4 hover:animate-pulse" to='/contact'>Contact</Link>
        </div>
    )
}

export default Dropdown
