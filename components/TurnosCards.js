'use client';

import Reveal from './Reveal';

const formatter = new Intl.DateTimeFormat('es-AR', {
  day: '2-digit',
  month: '2-digit',
});

function getNthWeekday(year, monthIndex, weekday, n) {
  const firstOfMonth = new Date(year, monthIndex, 1);
  const firstWeekdayOffset = (weekday - firstOfMonth.getDay() + 7) % 7;
  const day = 1 + firstWeekdayOffset + (n - 1) * 7;
  return new Date(year, monthIndex, day);
}

function formatDate(date) {
  return formatter.format(date);
}

export default function TurnosCards() {
  const now = new Date();
  const year = now.getFullYear();
  const monthIndex = now.getMonth();
  const firstFriday = getNthWeekday(year, monthIndex, 5, 1);
  const secondFriday = getNthWeekday(year, monthIndex, 5, 2);
  const thirdFriday = getNthWeekday(year, monthIndex, 5, 3);
  const fourthFriday = getNthWeekday(year, monthIndex, 5, 4);

  return (
    <div className="turnos-grid">
      <Reveal className="turnos-card" delay={160}>
        <h2>Salta Capital</h2>
        <p>Dirección: 25 de Mayo 727, Salta Capital</p>
        <p>Días de atención: Lunes a Jueves</p>
        <p>Horarios: 16 a 20</p>
        <a
          href="https://wa.me/5493872288720?text=Hola%2C%20quiero%20reservar%20un%20turno%20con%20el%20Dr%20Pedernera"
          className="cta-button"
        >
          Agendar Turno
        </a>
      </Reveal>
      <Reveal className="turnos-card" delay={220}>
        <h2>Tartagal</h2>
        <p>Dirección: Belgrano 277, Salta Tartagal</p>
        <p>
          Días de atención: Primer y tercer viernes del mes ({formatDate(firstFriday)} y{' '}
          {formatDate(thirdFriday)})
        </p>
        <p>Horarios: 8 a 12 y 16 a 20</p>
        <a
          href="https://wa.me/5493873220825?text=Hola%2C%20quiero%20reservar%20un%20turno%20con%20el%20Dr%20Pedernera"
          className="cta-button"
        >
          Agendar Turno
        </a>
      </Reveal>
      <Reveal className="turnos-card" delay={280}>
        <h2>Metán</h2>
        <p>Dirección: José Ignacio Sierra 330</p>
        <p>
          Días de atención: Segundo y cuarto viernes del mes ({formatDate(secondFriday)} y{' '}
          {formatDate(fourthFriday)})
        </p>
        <p>Horarios: 8 a 18</p>
        <a
          href="https://wa.me/5493876418365?text=Hola%2C%20quiero%20reservar%20un%20turno%20con%20el%20Dr%20Pedernera"
          className="cta-button"
        >
          Agendar Turno
        </a>
      </Reveal>
    </div>
  );
}
