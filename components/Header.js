import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <img src="/logo.png" alt="Alberto Pedernera" />
        </Link>
        <nav className="menu">
          <ul className="nav-list">
            <li className="nav-item" id="turnos-menu">
              <a className="nav-link" href="#">
                Turnos
              </a>
                <ul className="dropdown">
                  <li>
                    <Link href="/turnos">Salta Capital</Link>
                  </li>
                  <li>
                    <Link href="/turnos">Tartagal</Link>
                  </li>
                  <li>
                    <Link href="/turnos">Metán</Link>
                  </li>
                </ul>
            </li>
            <li className="nav-item" id="novedades-menu">
              <a className="nav-link" href="#">
                Novedades
              </a>
              <ul className="dropdown">
                <li className="opciones" />
              </ul>
            </li>
          </ul>
        </nav>
        <div className="contact-info">
          <a
            href="https://wa.me/5493872288720?text=Hola%2C%20quiero%20reservar%20un%20turno%20con%20el%20Dr%20Pedernera"
            className="telefono-link"
            aria-label="WhatsApp"
          >
            <img
              src="/telefono.png"
              alt="Telefono"
              width="20"
              height="20"
              className="telefono-img"
            />
          </a>
          <a
            className="numerotel"
            href="https://wa.me/5493872288720?text=Hola%2C%20quiero%20reservar%20un%20turno%20con%20el%20Dr%20Pedernera"
          >
            3872288720
          </a>
          <img src="/mapa.png" width="20" height="20" className="direccion-img" alt="Mapa" />
          <span className="direccion">
            <a href="https://maps.app.goo.gl/46MbYQRPMLNnP9GH6">25 de Mayo 727</a>
          </span>
        </div>
      </div>
    </header>
  );
}
