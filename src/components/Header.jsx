import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <span className="header-icon">✅</span>
        <div>
          <h1 className="header-title">Mis Tareas y Metas</h1>
          <p className="header-subtitle">Organiza tu vida, alcanza tus objetivos</p>
        </div>
      </div>
    </header>
  );
}

export default Header;