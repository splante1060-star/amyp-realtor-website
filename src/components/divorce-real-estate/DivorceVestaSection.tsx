export default function DivorceVestaSection() {
  return (
    <section className="divorce-vesta-section">
      <div className="container divorce-vesta-container">
        <div className="divorce-vesta-heading">
          <h2>
            Connected expertise <br />
            when it matters most.
          </h2>
        </div>

        <div className="divorce-vesta-content">
          <p className="divorce-vesta-lead">
            Through her work with Vesta, Amy is connected to a collaborative
            network of divorce professionals who understand how housing
            decisions intersect with legal, financial, mortgage, and family
            considerations.
          </p>

          <p>
            Vesta brings together professionals across multiple disciplines,
            creating a resource for people navigating the many interconnected
            decisions that can come with divorce.
          </p>

          <a
            href="https://vestadivorce.com/2020/06/04/amy-plante/"
            target="_blank"
            rel="noopener noreferrer"
            className="divorce-vesta-link"
          >
            Meet Amy on Vesta
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="divorce-vesta-network">
          <span>Legal</span>
          <span>Financial</span>
          <span>Mortgage</span>
          <span>Real Estate</span>
          <span>Family Support</span>
        </div>
      </div>
    </section>
  );
}
