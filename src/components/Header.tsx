import { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../assets/Plante Realty Logo-US.png";

export default function Header() {
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        <a className="site-logo" href="/" aria-label="Amy Plante Real Estate">
          <img
            src={logo}
            alt="Plante Realty Group"
            className="site-logo-image"
          />
        </a>

        <nav className="site-nav" aria-label="Main Navigation">
          <a href="/buy-or-sell">Buy or Sell</a>
          <a href="/divorce-real-estate">Divorce</a>
          <a href="/prep-to-sell">Prep to Sell</a>
          <a href="/estate-sales-downsizing">Estate Sales / Downsizing</a>
          <a href="/airbnb-investment">Airbnb & Investment</a>
          <a href="https://amyplante.kw.com/" target="_blank" rel="noreferrer">
            Search Homes
          </a>
          <div
            className="nav-dropdown"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              className="nav-dropdown-trigger"
              type="button"
              onClick={() => setResourcesOpen((open) => !open)}
              aria-expanded={resourcesOpen}
            >
              Resources
              <KeyboardArrowDownRoundedIcon
                className={`nav-dropdown-arrow ${resourcesOpen ? "open" : ""}`}
              />
            </button>

            {resourcesOpen && (
              <div className="nav-dropdown-menu">
                <a
                  href="https://calendly.com/amyplanterealtor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CalendarMonthOutlinedIcon />
                  <span>Book Consultation</span>
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdll0M9XLlYdAixN-NEPm8NcwoIEK6ET8GmPmHQNbVsiYDItQ/viewform"
                  target="_blank"
                  rel="noreferrer"
                >
                  <HomeOutlinedIcon />
                  <span>Get Your Home Value</span>
                </a>

                <a
                  href="https://ovou.com/exayodusofuyomav"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PersonOutlineRoundedIcon />
                  <span>Contact Info & Reviews</span>
                </a>

                <a
                  href="https://www.google.com/search?q=Amy+Plante+Realtor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GoogleIcon />
                  <span>Google Reviews</span>
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
