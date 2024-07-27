import { Navbar } from 'flowbite-react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const LearnLayout = () => {
  return (
    <>
    <Navbar fluid rounded>
        <Navbar.Brand as="a" href="https://flowbite-react.com">
          <img
            src="/vite.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} to="/about">
            About
          </Navbar.Link>
          <Navbar.Link as={Link} to="/services">
            Services
          </Navbar.Link>
          <Navbar.Link as={Link} to="/chat">
            Chat
          </Navbar.Link>
          <Navbar.Link as={Link} to="/learn">
            Learn
          </Navbar.Link>
          <Navbar.Link as={Link} to="/contribute">
            Contribute
          </Navbar.Link>
          <Navbar.Link as={Link} to="/login" >
            Login
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

        <div className="grid grid-cols-12">
            <aside className='col-span-3'>
              <nav>
                <ul className='flex flex-col gap-6 mt-8'>
                  <li>
                    <NavLink className={"py-[10px] px-[50px] pr-[90px] rounded-r-[10px] text-[20px]"} to={"/learn"} end>Quick Start</NavLink>
                  </li>
                  <li>
                    <NavLink className={"py-[10px] px-[50px] pr-[90px] rounded-r-[10px] text-[20px]"} to={"/learn/thinking-in-react"}>Thinking in react</NavLink>
                  </li>
                  <li>
                    <NavLink className={"py-[10px] px-[50px] pr-[90px] rounded-r-[10px] text-[20px]"} to={"/learn/installation"}>Installation</NavLink>
                  </li>
                </ul>
              </nav>
            </aside>
            <div className='py-10 px-8 col-span-9'>
              <Outlet />
            </div>
        </div>
    </>
  )
}

export default LearnLayout