import { useState } from "react";
import { NavLink } from "react-router-dom";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import logo from "../assets/Plante Realty Logo-US.png";

export default function Header() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

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

        <nav className="site-nav desktop-nav" aria-label="Main Navigation">
          <NavLink
            to="/buy-or-sell"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Buy or Sell
          </NavLink>
          <NavLink
            to="/divorce-real-estate"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Divorce
          </NavLink>
          <NavLink
            to="/prep-to-sell"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Prep to Sell
          </NavLink>
          <NavLink
            to="/estate-sales-downsizing"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Estate Sales / Downsizing
          </NavLink>
          <NavLink
            to="/airbnb-investment"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Airbnb & Investment
          </NavLink>

          {/* <a href="/buy-or-sell">Buy or Sell</a>
          <a href="/divorce-real-estate">Divorce</a>
          <a href="/prep-to-sell">Prep to Sell</a>
          <a href="/estate-sales-downsizing">Estate Sales / Downsizing</a>
          <a href="/airbnb-investment">Airbnb & Investment</a> */}
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
                <a href="/amy-plante.vcf" download="Amy-Plante.vcf">
                  <PersonAddAltOutlinedIcon />
                  <span>Save Amy to Contacts</span>
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
                  href="https://amyplante.kw.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SearchRoundedIcon />
                  <span>Search Homes</span>
                </a>
                <a
                  href="https://www.zillow.com/profile/amyplante"
                  target="_blank"
                  rel="noreferrer"
                >
                  <OtherHousesOutlinedIcon />
                  <span>Zillow Profile & Reviews</span>
                </a>
                <a
                  href="https://g.page/r/CQilLLeWg4U_EBM/review"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RateReviewOutlinedIcon />
                  <span>Leave a Review</span>
                </a>
              </div>
            )}
          </div>
        </nav>

        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Navigation Menu"
        >
          <MenuRoundedIcon />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button
            className="mobile-menu-close"
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
          >
            <CloseRoundedIcon />
          </button>

          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="/buy-or-sell">Buy or Sell</a>
            <a href="/divorce-real-estate">Divorce</a>
            <a href="/prep-to-sell">Prep to Sell</a>
            <a href="/estate-sales-downsizing">Estate Sales / Downsizing</a>
            <a href="/airbnb-investment">Airbnb & Investment</a>

            <button
              className="mobile-resources-trigger"
              type="button"
              onClick={() => setMobileResourcesOpen((open) => !open)}
              aria-expanded={mobileResourcesOpen}
            >
              Resources
              <KeyboardArrowDownRoundedIcon
                className={`nav-dropdown-arrow ${
                  mobileResourcesOpen ? "open" : ""
                }`}
              />
            </button>

            {mobileResourcesOpen && (
              <div className="mobile-resources-menu">
                <a
                  href="https://calendly.com/amyplanterealtor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CalendarMonthOutlinedIcon />
                  <span>Book Consultation</span>
                </a>
                <a href="/amy-plante.vcf" download="Amy-Plante.vcf">
                  <PersonAddAltOutlinedIcon />
                  <span>Save Amy to Contacts</span>
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
                  href="https://amyplante.kw.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SearchRoundedIcon />
                  <span>Search Homes</span>
                </a>
                <a
                  href="https://www.zillow.com/profile/amyplante"
                  target="_blank"
                  rel="noreferrer"
                >
                  <OtherHousesOutlinedIcon />
                  <span>Zillow Profile & Reviews</span>
                </a>
                <a
                  href="https://g.page/r/CQilLLeWg4U_EBM/review"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RateReviewOutlinedIcon />
                  <span>Leave a Review</span>
                </a>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
