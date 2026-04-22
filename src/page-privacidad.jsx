// Política de privacidad — NextScenario (ES)

const legalStyle = { fontSize: 15, lineHeight: 1.65, color: "var(--mute)", maxWidth: 800 };

function PrivacidadPage() {
  return (
    <>
      <SubNav current="privacidad.html" lang="es" />

      <section className="sub-hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Inicio</a> · <span>Política de privacidad</span></div>
          <h1 className="sub-h1">Política de privacidad</h1>
        </div>
      </section>

      <section>
        <div className="container" style={legalStyle}>

          <h3>1. Responsable del tratamiento</h3>
          <p>El responsable del tratamiento de tus datos personales es:</p>
          <ul>
            <li><strong>Razón social:</strong> NextScenario S.L.</li>
            <li><strong>Domicilio social:</strong> Madrid, España</li>
            <li><strong>Correo electrónico:</strong> privacidad@nextscenario.com</li>
            <li><strong>Sitio web:</strong> nextscenario.com</li>
          </ul>

          <h3>2. Datos que recogemos</h3>
          <p>En función del uso que hagas de la plataforma, podemos recoger las siguientes categorías de datos personales:</p>
          <ul>
            <li><strong>Datos de cuenta:</strong> nombre, apellidos, dirección de correo electrónico, contraseña cifrada, nombre de la empresa, cargo y número de teléfono de contacto.</li>
            <li><strong>Datos de uso:</strong> dirección IP, tipo de navegador, sistema operativo, páginas visitadas, fecha y hora de acceso, interacciones con la plataforma y registros de actividad.</li>
            <li><strong>Datos de integración bancaria y ERP:</strong> información financiera obtenida mediante conexiones Open Banking (PSD2) y conectores ERP que el usuario autoriza expresamente, incluyendo saldos, movimientos, facturas y asientos contables. Estos datos se procesan en modo de solo lectura.</li>
          </ul>

          <h3>3. Finalidad del tratamiento</h3>
          <p>Tratamos tus datos personales para las siguientes finalidades:</p>
          <ul>
            <li>Gestionar tu cuenta y prestarte el servicio contratado.</li>
            <li>Procesar la integración con tus fuentes de datos bancarias y ERP.</li>
            <li>Generar análisis, dashboards, modelos financieros y previsiones dentro de la plataforma.</li>
            <li>Enviarte comunicaciones relacionadas con el servicio (actualizaciones, alertas, soporte).</li>
            <li>Mejorar la plataforma mediante análisis agregados y anonimizados de uso.</li>
            <li>Cumplir con obligaciones legales y regulatorias.</li>
          </ul>

          <h3>4. Base legal del tratamiento (RGPD)</h3>
          <p>El tratamiento de tus datos se basa en las siguientes bases legales conforme al Reglamento General de Protección de Datos (RGPD):</p>
          <ul>
            <li><strong>Ejecución del contrato</strong> (art. 6.1.b RGPD): el tratamiento es necesario para la prestación del servicio que has contratado.</li>
            <li><strong>Consentimiento</strong> (art. 6.1.a RGPD): para el envío de comunicaciones comerciales y la activación de integraciones con terceros.</li>
            <li><strong>Interés legítimo</strong> (art. 6.1.f RGPD): para la mejora del servicio y la prevención del fraude.</li>
            <li><strong>Obligación legal</strong> (art. 6.1.c RGPD): para el cumplimiento de obligaciones fiscales, contables y regulatorias.</li>
          </ul>

          <h3>5. Destinatarios</h3>
          <p>Tus datos personales podrán ser comunicados a los siguientes destinatarios:</p>
          <ul>
            <li>Proveedores de infraestructura cloud y alojamiento.</li>
            <li>Proveedores de servicios de pago y facturación.</li>
            <li>Agregadores bancarios autorizados conforme a PSD2.</li>
            <li>Autoridades públicas cuando sea requerido por ley.</li>
          </ul>
          <p>Todos nuestros proveedores están sujetos a contratos de encargo de tratamiento que garantizan la protección de tus datos.</p>

          <h3>6. Transferencias internacionales</h3>
          <p>Algunos de nuestros proveedores de infraestructura pueden estar ubicados fuera del Espacio Económico Europeo (EEE). En estos casos, garantizamos que las transferencias se realizan conforme a las salvaguardias adecuadas previstas en el RGPD, incluyendo cláusulas contractuales tipo aprobadas por la Comisión Europea y decisiones de adecuación.</p>

          <h3>7. Plazo de conservación</h3>
          <p>Conservamos tus datos personales mientras mantengas una cuenta activa en NextScenario. Una vez cancelada la cuenta, tus datos serán eliminados o anonimizados en un plazo máximo de 90 días, salvo que exista una obligación legal que requiera su conservación por un período superior (por ejemplo, obligaciones fiscales de hasta 5 años).</p>

          <h3>8. Derechos del usuario</h3>
          <p>Conforme al RGPD, tienes derecho a:</p>
          <ul>
            <li><strong>Acceso:</strong> solicitar una copia de los datos personales que tenemos sobre ti.</li>
            <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
            <li><strong>Supresión:</strong> solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
            <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado, de uso común y lectura mecánica.</li>
            <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos en determinadas circunstancias.</li>
            <li><strong>Limitación:</strong> solicitar la restricción del tratamiento de tus datos.</li>
          </ul>
          <p>Para ejercer cualquiera de estos derechos, contacta con nuestro Delegado de Protección de Datos en <a href="mailto:privacidad@nextscenario.com">privacidad@nextscenario.com</a>. Responderemos en un plazo máximo de 30 días. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).</p>

          <h3>9. Seguridad</h3>
          <p>En NextScenario implementamos medidas de seguridad técnicas y organizativas de primer nivel para proteger tus datos:</p>
          <ul>
            <li>Cifrado de datos en reposo mediante <strong>AES-256</strong>.</li>
            <li>Cifrado de datos en tránsito mediante <strong>TLS 1.3</strong>.</li>
            <li>Certificación <strong>ISO 27001</strong> del sistema de gestión de seguridad de la información.</li>
            <li>Controles de acceso basados en roles y autenticación multifactor.</li>
            <li>Auditorías de seguridad periódicas realizadas por terceros independientes.</li>
            <li>Monitorización continua y detección de intrusiones.</li>
          </ul>

          <h3>10. Cookies</h3>
          <p>Utilizamos cookies y tecnologías similares para el funcionamiento de la plataforma y la mejora de la experiencia del usuario. Para obtener información detallada sobre las cookies que utilizamos, su finalidad y cómo gestionarlas, consulta nuestra <a href="cookies.html">Política de cookies</a>.</p>

          <h3>11. Contacto del Delegado de Protección de Datos</h3>
          <p>Si tienes cualquier pregunta o solicitud relacionada con el tratamiento de tus datos personales, puedes contactar con nuestro Delegado de Protección de Datos (DPO):</p>
          <ul>
            <li><strong>Correo electrónico:</strong> <a href="mailto:privacidad@nextscenario.com">privacidad@nextscenario.com</a></li>
          </ul>

          <p style={{ marginTop: 48, fontSize: 13, color: "var(--mute)" }}>Última actualización: abril de 2026</p>
        </div>
      </section>

      <SubFooter lang="es" current="privacidad.html" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PrivacidadPage />);
