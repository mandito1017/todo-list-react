import './AppNavbar.scss';
import { Navbar, Nav, Container } from 'react-bootstrap';

function AppNavbar({ activePage, setActivePage }) {
  return (
    <Navbar expand="lg" className="app-navbar">
      <Container>
        <Navbar.Brand className="navbar-brand-custom">
          📋 To-Do App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className={activePage === 'tasks' ? 'nav-link-custom active' : 'nav-link-custom'}
              onClick={() => setActivePage('tasks')}
            >
              Tasks
            </Nav.Link>
            <Nav.Link
              className={activePage === 'goals' ? 'nav-link-custom active' : 'nav-link-custom'}
              onClick={() => setActivePage('goals')}
            >
              Goals
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;