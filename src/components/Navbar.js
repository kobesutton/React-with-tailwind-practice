import { Link } from 'react-router-dom'

const Navbar = ({ toggle }) => {
    return (
      <nav className="fixed bg-white shadow-sm h-16  w-full px-5 py-2 flex justify-between items-center font-mono text-lg">
        <Link to ='/' className="pl-8 ">Realtor</Link>
         <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor">
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="p-4 hover:animate-pulse" to='/'>Home</Link>
                <Link className="p-4 hover:animate-pulse" to='/menu'>Sale</Link>
                <Link className="p-4 hover:animate-pulse" to='/about'>About</Link>
                <Link className="p-4 hover:animate-pulse" to='/contact'>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
