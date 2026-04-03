const strengths = [
  { title: 'Écoute bienveillante', text: 'Un cadre rassurant pour déposer ce qui pèse et avancer à votre rythme.' },
  { title: 'Consultations à Marseille', text: 'Cabinet accessible pour les habitants de Marseille et des environs.' },
  { title: 'Accompagnement personnalisé', text: 'Anxiété, stress, burn-out, deuil, difficultés relationnelles, confiance en soi.' },
];

const steps = [
  'Prise de contact simple par téléphone ou formulaire',
  'Premier échange pour comprendre votre besoin',
  'Mise en place d’un accompagnement adapté',
];

const faqs = [
  ['Combien de temps dure une séance ?', 'En général, une séance dure 45 à 50 minutes.'],
  ['Faut-il avoir une raison précise ?', 'Non. Vous pouvez venir avec une difficulté diffuse ou un besoin de soutien.'],
  ['Proposez-vous des rendez-vous rapides ?', 'Oui, selon les disponibilités du cabinet à Marseille.'],
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="container grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <span className="badge">Psychologue à Marseille</span>
            <h1 className="h1">Un espace d’écoute pour traverser les périodes difficiles.</h1>
            <p className="muted" style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 620 }}>
              Consultation psychologique à Marseille pour vous aider à retrouver de la clarté, du calme et des repères.
              Une approche humaine, professionnelle et adaptée à votre situation.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
              <a className="btn btn-primary" href="#contact">Prendre rendez-vous</a>
              <a className="btn btn-secondary" href="#services">Découvrir l’accompagnement</a>
            </div>
          </div>
          <div className="card" style={{ padding: 28 }}>
            <h2 style={{ marginTop: 0 }}>Pourquoi choisir ce cabinet ?</h2>
            <ul className="list">
              <li>Accueil chaleureux et confidentiel</li>
              <li>Approche centrée sur vos besoins</li>
              <li>Cabinet à Marseille, facilement accessible</li>
              <li>Rendez-vous sur place ou selon organisation du cabinet</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <h2 className="h2">Un accompagnement sur mesure</h2>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {strengths.map((item) => (
              <article key={item.title} className="card" style={{ padding: 24 }}>
                <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                <p className="muted" style={{ lineHeight: 1.7 }}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2" style={{ alignItems: 'start' }}>
          <div>
            <h2 className="h2">Comment se déroule la première prise de contact ?</h2>
            <p className="muted" style={{ lineHeight: 1.75 }}>
              L’objectif est de comprendre votre demande, répondre à vos questions et déterminer ensemble la forme
              d’accompagnement la plus adaptée.
            </p>
          </div>
          <div className="card" style={{ padding: 24 }}>
            {steps.map((step, index) => (
              <div key={step} style={{ display: 'flex', gap: 16, marginBottom: index === steps.length - 1 ? 0 : 16 }}>
                <div style={{ width: 34, height: 34, borderRadius: 999, background: '#2f6b5f', color: 'white', display: 'grid', placeItems: 'center', fontWeight: 800 }}>
                  {index + 1}
                </div>
                <p style={{ margin: 0, lineHeight: 1.7 }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2">Questions fréquentes</h2>
          <div className="grid" style={{ marginTop: 24 }}>
            {faqs.map(([q, a]) => (
              <div key={q} className="card" style={{ padding: 22 }}>
                <strong>{q}</strong>
                <p className="muted" style={{ marginBottom: 0, lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container card" style={{ padding: 32, background: '#2f6b5f', color: 'white' }}>
          <h2 className="h2" style={{ marginTop: 0 }}>Vous cherchez un psychologue à Marseille ?</h2>
          <p style={{ lineHeight: 1.75, maxWidth: 760 }}>
            Contactez le cabinet pour convenir d’un premier rendez-vous et faire le point sur votre situation.
          </p>
          <a className="btn" style={{ background: 'white', color: '#2f6b5f', marginTop: 12 }} href="mailto:contact@cabinet-psy-marseille.fr">
            Contacter le cabinet
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container muted">© Cabinet psychologue Marseille</div>
      </footer>
    </main>
  );
}