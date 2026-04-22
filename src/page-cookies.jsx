// Política de cookies — NextScenario (ES)

const legalStyleC = { fontSize: 15, lineHeight: 1.65, color: "var(--mute)", maxWidth: 800 };

function CookiesPage() {
  return (
    <>
      <SubNav current="cookies.html" lang="es" />

      <section className="sub-hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Inicio</a> · <span>Política de cookies</span></div>
          <h1 className="sub-h1">Política de cookies</h1>
        </div>
      </section>

      <section>
        <div className="container" style={legalStyleC}>

          <h3>1. Qué son las cookies</h3>
          <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu navegador cuando los visitas. Se utilizan para recordar tus preferencias, analizar el uso del sitio y mejorar tu experiencia de navegación. Las cookies pueden ser propias (establecidas por NextScenario) o de terceros (establecidas por servicios externos que utilizamos).</p>

          <h3>2. Cookies que utilizamos</h3>
          <p>A continuación, detallamos las categorías de cookies que utilizamos en la plataforma NextScenario:</p>

          <div style={{ overflowX: "auto", marginTop: 16, marginBottom: 24 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--line)" }}>
                  <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 600, color: "var(--ink)" }}>Categoría</th>
                  <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 600, color: "var(--ink)" }}>Finalidad</th>
                  <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 600, color: "var(--ink)" }}>Duración</th>
                  <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 600, color: "var(--ink)" }}>Obligatoria</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--line)" }}>
                  <td style={{ padding: "10px 12px", fontWeight: 500 }}>Necesarias</td>
                  <td style={{ padding: "10px 12px" }}>Imprescindibles para el funcionamiento de la plataforma: autenticación, seguridad, preferencias de sesión y consentimiento de cookies.</td>
                  <td style={{ padding: "10px 12px" }}>Sesión — 1 año</td>
                  <td style={{ padding: "10px 12px" }}>Sí</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--line)" }}>
                  <td style={{ padding: "10px 12px", fontWeight: 500 }}>Analíticas</td>
                  <td style={{ padding: "10px 12px" }}>Permiten medir el tráfico, analizar el comportamiento de los usuarios y mejorar el servicio. Los datos se procesan de forma agregada.</td>
                  <td style={{ padding: "10px 12px" }}>Hasta 2 años</td>
                  <td style={{ padding: "10px 12px" }}>No</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--line)" }}>
                  <td style={{ padding: "10px 12px", fontWeight: 500 }}>Funcionales</td>
                  <td style={{ padding: "10px 12px" }}>Recuerdan tus preferencias de configuración, idioma seleccionado, zona horaria y personalización del dashboard.</td>
                  <td style={{ padding: "10px 12px" }}>Hasta 1 año</td>
                  <td style={{ padding: "10px 12px" }}>No</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--line)" }}>
                  <td style={{ padding: "10px 12px", fontWeight: 500 }}>Marketing</td>
                  <td style={{ padding: "10px 12px" }}>Utilizadas para medir la eficacia de campañas publicitarias y mostrar contenido relevante. Pueden ser compartidas con plataformas publicitarias.</td>
                  <td style={{ padding: "10px 12px" }}>Hasta 2 años</td>
                  <td style={{ padding: "10px 12px" }}>No</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>3. Gestión de cookies</h3>
          <p>Puedes gestionar tus preferencias de cookies en cualquier momento:</p>
          <ul>
            <li><strong>Panel de cookies:</strong> al visitar nuestra plataforma por primera vez, se muestra un banner de consentimiento donde puedes aceptar o rechazar cada categoría de cookies.</li>
            <li><strong>Configuración del navegador:</strong> puedes configurar tu navegador para bloquear o eliminar cookies. Ten en cuenta que desactivar las cookies necesarias puede afectar al funcionamiento de la plataforma.</li>
            <li><strong>Revocación del consentimiento:</strong> puedes modificar tus preferencias en cualquier momento desde el enlace "Configuración de cookies" disponible en el pie de página.</li>
          </ul>

          <h3>4. Cookies de terceros</h3>
          <p>Utilizamos servicios de terceros que pueden establecer sus propias cookies en tu navegador:</p>
          <ul>
            <li><strong>Google Analytics:</strong> análisis de tráfico web y comportamiento de usuarios. Google puede procesar datos en servidores ubicados fuera del EEE. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de privacidad de Google</a>.</li>
            <li><strong>Stripe:</strong> procesamiento de pagos y facturación. Las cookies de Stripe son necesarias para la seguridad de las transacciones. <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Política de privacidad de Stripe</a>.</li>
            <li><strong>Intercom:</strong> chat de soporte y comunicación con el usuario. <a href="https://www.intercom.com/legal/privacy" target="_blank" rel="noopener noreferrer">Política de privacidad de Intercom</a>.</li>
          </ul>

          <h3>5. Actualización de la política</h3>
          <p>NextScenario se reserva el derecho de actualizar esta Política de Cookies para reflejar cambios en las cookies que utilizamos o por motivos legales. Cualquier modificación será publicada en esta página con la fecha de actualización. Te recomendamos revisarla periódicamente.</p>

          <h3>6. Contacto</h3>
          <p>Si tienes cualquier pregunta sobre nuestra Política de Cookies o sobre cómo gestionamos tus datos, puedes contactarnos en:</p>
          <ul>
            <li><strong>Correo electrónico:</strong> <a href="mailto:privacidad@nextscenario.com">privacidad@nextscenario.com</a></li>
            <li><strong>Empresa:</strong> NextScenario S.L., Madrid, España</li>
          </ul>

          <p style={{ marginTop: 48, fontSize: 13, color: "var(--mute)" }}>Última actualización: abril de 2026</p>
        </div>
      </section>

      <SubFooter lang="es" current="cookies.html" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CookiesPage />);
