import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Dr. Pedernera, Cirujano Vascular',
  description: 'Flebologia y cirugia vascular - Dr. Alberto Pedernera',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
