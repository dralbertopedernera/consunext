import Link from 'next/link';
import Reveal from '../components/Reveal';

export default function HomePage() {
  return (
    <main>
      <header className="hero-section">
        <div className="hero-media">
          <img src="/background.jpg" alt="Consultorio del Dr. Pedernera" className="hero-image" />
        </div>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow">Flebología Estética</span>
            <h1>Flebólogo y Cirujano Vascular Dr. Alberto Pedernera</h1>
            <p>Especialista en Flebología y Cirugía Vascular.</p>
            <div className="hero-actions">
              <Link href="/turnos" className="cta-button">
                Agendar Turno
              </Link>
              <a className="secondary-link" href="#servicios">
                Ver servicios
              </a>
            </div>
          </div>
          <div className="hero-card">
            <p>Atención personalizada, diagnóstico preciso y técnicas mínimamente invasivas.</p>
            <div className="hero-card-row">
              <span>25+ años de experiencia</span>
              <span>Consultorio en Salta</span>
            </div>
          </div>
        </div>
      </header>

      <Reveal className="section" delay={120}>
        <section className="about-doctor">
          <div className="container about-grid">
            <div className="about-media">
              <img src="/doctor.jpg" alt="Dr. Pedernera" className="profile-photo" />
            </div>
            <div className="bio">
              <h2>Dr. Alberto Pedernera</h2>
              <p>
              Especialista en Angiología y Cirugía Vascular, ex alumno de la escuela de flebología
              SAFYL (Sociedad Argentina de Flebología y Linfología) con más de 25 años de experiencia.
              Graduado de la Universidad Nacional de Tucumán, ex Jefe de Residente de Cirugía General
              y ex Jefe de Servicio en Cirugía Vascular en el Hospital San Bernardo.
            </p>
            <p>
              Comprometido con ofrecer un cuidado excepcional y personalizado, mediante diagnósticos,
              tratamientos y técnicas mínimamente invasivas.
            </p>
          </div>
        </div>
      </section>
      </Reveal>

      <section className="services section" id="servicios">
        <div className="container">
          <Reveal className="section-head" delay={120}>
            <div>
              <span className="eyebrow">Servicios</span>
              <h2>Nuestros Servicios</h2>
            </div>
          </Reveal>
          <div className="service-list">
            <Reveal className="service-item" delay={160}>
              <img src="/varices.jpg" alt="Tratamiento de várices" className="service-image" />
              <h3 className="titulo1">Tratamiento de Várices</h3>
              <p>
                Procedimientos mínimamente invasivos para el tratamiento de várices y arañas
                vasculares.
              </p>
            </Reveal>
            <Reveal className="service-item" delay={220}>
              <img
                src="/ultrasonido.jpeg"
                alt="Diagnóstico por ultrasonido"
                className="service-image"
              />
              <h3 className="titulo2">Diagnóstico por Ultrasonido</h3>
              <p>
                Uso de tecnología de ultrasonido para diagnóstico preciso de enfermedades vasculares.
              </p>
            </Reveal>
            <Reveal className="service-item" delay={280}>
              <img src="/varicosa.jpg" alt="Úlceras varicosas" className="service-image" />
              <h3 className="titulo1">Úlceras Varicosas</h3>
              <p>
                Curación de várices varicosas ofrece procedimientos avanzados y mínimamente invasivos
                para tratar eficazmente las várices, aliviando y mejorando la salud vascular de los
                pacientes.
              </p>
            </Reveal>
            <Reveal className="service-item" delay={340}>
              <img src="/cirugia.png" alt="Cirugía de várices" className="service-image" />
              <h3 className="titulo1">Cirugía de Várices</h3>
              <p>
                Cirugía de várices con procedimientos altamente efectivos para el tratamiento de
                várices, con resultados óptimos y una rápida recuperación.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal className="cta-strip" delay={180}>
        <div className="container cta-inner">
          <div>
            <h2>Agenda tu turno con un enfoque estético y seguro</h2>
            <p>Atención profesional en Salta Capital, Tartagal y Metán.</p>
          </div>
          <Link href="/turnos" className="cta-button">
            Ver turnos
          </Link>
        </div>
      </Reveal>
    </main>
  );
}
