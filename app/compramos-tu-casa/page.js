import OfferForm from '@/components/OfferForm';

export const metadata = {
  title: 'Vendemos Tu Casa Rápido Austin TX | Oferta en Efectivo | Flint House Buyers',
  description: 'Recibe una oferta en efectivo por tu casa en Austin en 24 horas. Sin reparaciones, sin agentes, sin comisiones. Cerramos en tan solo 7 días. Llámanos o llena el formulario.',
  alternates: { canonical: 'https://flinthousebuyers.com/compramos-tu-casa/' },
};

const pasos = [
  { num: '01', titulo: 'Cuéntanos sobre tu casa', cuerpo: 'Llena el formulario o llámanos directamente. Te haremos unas preguntas sencillas sobre tu propiedad — sin presión, sin juicios, solo información para hacerte una oferta real.' },
  { num: '02', titulo: 'Recibe tu oferta en efectivo', cuerpo: 'En 24 horas tendrás una oferta escrita y real en tus manos. Sin sorpresas. Solo un número claro basado en el mercado actual de Austin.' },
  { num: '03', titulo: 'Elige tu fecha de cierre', cuerpo: 'Tú decides cuándo cerramos. Podemos fondear en tan solo 7 días, o darte hasta 60 días si necesitas tiempo para mudarte. El tiempo es tuyo. El efectivo está listo.' },
];

const preguntas = [
  { p: '¿Compran casas que necesitan reparaciones?', r: 'Sí — y ese es exactamente el punto. Compramos casas tal como están: con daños en el techo, problemas de cimentación, daños por agua, incendio, problemas de código, o moho. No gastas nada en reparaciones antes del cierre.' },
  { p: '¿Hay comisiones o tarifas?', r: 'Ninguna. La oferta que hacemos es la cantidad que recibe en su bolsillo. Sin comisiones de agente, sin cargos de servicio, sin sorpresas.' },
  { p: '¿Qué tan rápido pueden cerrar?', r: 'Tan rápido como 7 días desde el contrato firmado si el título está libre. La mayoría de nuestros cierres ocurren entre 7 y 14 días.' },
  { p: '¿Tengo que aceptar la oferta?', r: 'Nunca. Nuestra oferta es 100% sin obligación. Si el número no funciona para usted, se va — sin presión, sin llamadas de seguimiento.' },
];

export default function CompramosTuCasa() {
  return (
    <>
      {/* Hero */}
      <div
        style={{
          background: 'var(--flint-black)',
          padding: '10rem 0 5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <p className="section-label">AUSTIN, TEXAS · EN ESPAÑOL</p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: 'var(--white)',
              letterSpacing: '0.03em',
              lineHeight: 1,
              marginBottom: '1.5rem',
            }}
          >
            <span style={{ color: 'var(--ember-amber)' }}>Compramos</span><br />
            Tu Casa
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.2rem',
              color: 'var(--parchment)',
              maxWidth: '560px',
              lineHeight: 1.8,
              marginBottom: '2rem',
            }}
          >
            La oferta en efectivo más rápida de Austin. Sin reparaciones. Sin agentes. Sin espera.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1rem',
              color: 'var(--ash)',
              maxWidth: '560px',
              lineHeight: 1.8,
            }}
          >
            Flint House Buyers es una empresa local de Austin — no una franquicia nacional, no un centro de llamadas. Treyvion Ojeda nació y creció en Austin y tiene un interés permanente en esta comunidad.
          </p>
        </div>
      </div>

      {/* 3 Pasos */}
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container">
          <p className="section-label">CÓMO FUNCIONA</p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: 'var(--flint-black)',
              letterSpacing: '0.02em',
              marginBottom: '3rem',
            }}
          >
            Tres Pasos para Tu Oferta en Efectivo
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {pasos.map((p) => (
              <div
                key={p.num}
                style={{
                  background: 'var(--white)',
                  borderLeft: '3px solid var(--ember-amber)',
                  padding: '2.5rem',
                  borderRadius: '2px',
                }}
              >
                <p
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '4rem',
                    color: 'var(--ember-amber)',
                    lineHeight: 1,
                    marginBottom: '1rem',
                  }}
                >
                  {p.num}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    color: 'var(--flint-black)',
                    marginBottom: '0.875rem',
                  }}
                >
                  {p.titulo}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: '1rem',
                    color: 'var(--flint-stone)',
                    lineHeight: 1.75,
                  }}
                >
                  {p.cuerpo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preguntas */}
      <div style={{ background: 'var(--flint-black)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="section-label">PREGUNTAS FRECUENTES</p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: 'var(--white)',
              letterSpacing: '0.02em',
              marginBottom: '3rem',
            }}
          >
            Preguntas que Escuchamos Todos los Días
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {preguntas.map((q) => (
              <div
                key={q.p}
                style={{
                  borderLeft: '2px solid var(--ember-amber)',
                  paddingLeft: '1.5rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: 'var(--white)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {q.p}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: '1rem',
                    color: 'var(--ash)',
                    lineHeight: 1.8,
                  }}
                >
                  {q.r}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <OfferForm />
    </>
  );
}
