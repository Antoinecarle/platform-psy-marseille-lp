import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Psychologue à Marseille | Consultation & accompagnement',
  description: 'Landing page professionnelle pour un psychologue à Marseille : écoute, accompagnement, rendez-vous rapide.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}'}},{