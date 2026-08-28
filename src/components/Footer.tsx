import { useLocation, NavLink } from "react-router-dom";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import amyLogo from "../assets/Plante Realty Logo-US.png";
import kwLogo from "../assets/kw.png";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className="site-footer">
      <img
        src={amyLogo}
        alt=""
        aria-hidden="true"
        className="footer-watermark"
      />
      <div className="container footer-container">
        <div className="footer-main">
          <nav className="footer-nav" aria-label="Footer Navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/buy-or-sell">Buy or Sell</NavLink>
            <NavLink to="/divorce-real-estate">Divorce</NavLink>
            <NavLink to="/prep-to-sell">Prep to Sell</NavLink>
            <NavLink to="/estate-sales-downsizing">
              Estate Sales / Downsizing
            </NavLink>
            <NavLink to="/airbnb-investment">Airbnb & Investment</NavLink>
          </nav>
          <div className="footer-resources">
            <span className="footer-resources-title">Resources</span>
            <a
              href="https://calendly.com/amyplanterealtor"
              target="_blank"
              rel="noreferrer"
            >
              Book Consultation
            </a>

            {/* <a href="/amy-plante.vcf" download="Amy-Plante.vcf">
              Save Amy to Contacts
            </a> */}

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdll0M9XLlYdAixN-NEPm8NcwoIEK6ET8GmPmHQNbVsiYDItQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Get Your Home Value
            </a>

            <a
              href="https://amyplante.kw.com/"
              target="_blank"
              rel="noreferrer"
            >
              Search Homes
            </a>
            <a
              href="https://www.zillow.com/profile/amyplante"
              target="_blank"
              rel="noreferrer"
            >
              Zillow Profile & Reviews
            </a>

            <a
              href="https://g.page/r/CQilLLeWg4U_EBM/review"
              target="_blank"
              rel="noreferrer"
            >
              Leave a Review
            </a>
          </div>

          <div className="footer-newsletter">
            <NewsletterForm />
          </div>
        </div>

        {!isHomePage && (
          <div className="footer-contact">
            <div className="footer-contact-left">
              <div className="footer-contact-info">
                {" "}
                <strong>Amy Plante</strong>
                <span>REALTOR® · MA · RI · FL</span>
              </div>

              <div className="footer-contact-links">
                <a href="tel:5089629759">
                  <PhoneOutlinedIcon />
                  <span>508-962-9759</span>
                </a>

                <a href="mailto:amyplanterealtor@gmail.com">
                  <EmailOutlinedIcon />
                  <span>amyplanterealtor@gmail.com</span>
                </a>
              </div>

              <div className="footer-socials">
                <a
                  href="https://www.instagram.com/a1plante?igsh=NmRrdHhzOGhrZWZi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="https://www.facebook.com/share/1LtnLutt1J/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>

                <a
                  href="https://www.linkedin.com/in/amyaplante?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>

            <a
              href="/amy-plante.vcf"
              download="Amy-Plante.vcf"
              className="footer-save-contact"
            >
              <PersonAddAltOutlinedIcon />
              <span>Save Contact</span>
            </a>
          </div>
        )}

        <div className="footer-bottom">
          <img
            src={kwLogo}
            alt="Keller Williams Elite"
            className="footer-brokerage-logo"
          />

          <div className="footer-legal">
            <div className="footer-legal-row footer-legal-primary">
              <span>© 2026 Amy Plante</span>
              <span className="footer-dot">·</span>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </div>

            <div className="footer-legal-row">
              <span>25 Messenger St, Plainville, MA 02762</span>
            </div>

            <div className="footer-legal-row">
              <span>Licensed in Massachusetts, Rhode Island & Florida</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
