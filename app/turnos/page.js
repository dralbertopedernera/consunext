import Reveal from '../../components/Reveal';
import TurnosCards from '../../components/TurnosCards';

export default function TurnosPage() {
  return (
    <main>
      <section className="turnos-hero">
        <div className="container">
          <Reveal className="turnos-hero-text" delay={120}>
            <span className="eyebrow">Turnos</span>
            <h1>Agenda tu consulta</h1>
            <p>Disponibilidad en Salta Capital, Tartagal y Metán.</p>
          </Reveal>
        </div>
      </section>

      <section className="turnos section">
        <div className="container">
          <TurnosCards />
        </div>
      </section>
    </main>
  );
}
