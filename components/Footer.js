import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-columns">
          <div className="footer-column1">
            <h3 className="contacto">Contacto</h3>
            <ul className="footer-contact">
              <li>
                <a>Teléfono: 3876140016</a>
              </li>
              <li>
                <a>Email: albertojosepedernera@hotmail.com</a>
              </li>
              <li>
                <a>Dirección: 25 de Mayo 727, Salta Capital</a>
              </li>
              <li>
                <a>Belgrano 277, Salta Tartagal</a>
              </li>
              <li>
                <a>Dirección: José Ignacio Sierra 330, Salta Metán</a>
              </li>
            </ul>
          </div>
          <div className="footer-column2">
            <h3 className="enlacesrapidos">Enlaces Rápidos</h3>
            <ul className="footer-links">
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <a href="#">Sobre mí</a>
              </li>
              <li>
                <a href="#">Servicios</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Dr. Alberto Pedernera. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
