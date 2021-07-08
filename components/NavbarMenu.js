import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

const NavbarMenu = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>My next app</Navbar.Brand>
      <Nav>
        <Link href="/" passHref>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link href="/posts" passHref>
          <Nav.Link>Posts</Nav.Link>
        </Link>
        <Link href="/joke/random" passHref>
          <Nav.Link>Jokes</Nav.Link>
        </Link>
        <Link href="/about" passHref>
          <Nav.Link>About</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarMenu;
