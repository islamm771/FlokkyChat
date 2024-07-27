import { Navbar } from "flowbite-react";
import { Link, Outlet } from "react-router-dom";



const RootLayout = () => {

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

      <div className="container mx-auto pt-12">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
