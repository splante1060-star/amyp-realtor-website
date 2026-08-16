import amyAbout from "../../assets/Amy-Plante-Branding-8.jpg";
import {
  WorkspacePremiumOutlined,
  MilitaryTechOutlined,
  EmojiEventsOutlined,
} from "@mui/icons-material";

export default function AboutAmySection() {
  return (
    <section className="about-amy-section">
      <div className="container about-amy-container">
        <div className="about-amy-image-wrapper">
          <img className="about-amy-image" src={amyAbout} alt="Amy Plante" />
        </div>

        <div className="about-amy-content">
          <h2>
            Experience matters. So does having the right person beside you.
          </h2>

          <div className="about-amy-copy">
            <p>
              Since 2002, Amy Plante has helped clients navigate real estate
              with experience, strategy, and genuine personal attention. As a
              Realtor® with Keller Williams, licensed in Massachusetts, Rhode
              Island, and Florida, she brings both local expertise and a broad
              perspective to every move.
            </p>

            <p>
              Amy's work often goes beyond a traditional purchase or sale. She
              specializes in divorce real estate, downsizing and estate sales,
              preparing homes for market, and investment and Airbnb properties —
              situations where thoughtful planning can make all the difference.
            </p>

            <p>
              Her approach starts with listening. Every client, home, and
              circumstance is different, and Amy believes the best real estate
              guidance begins with understanding what matters most before
              creating a plan for what comes next.
            </p>
          </div>

          <div className="about-amy-recognition">
            <div className="about-amy-stat">
              <strong>24+ Years</strong>
              <span>Serving Buyers & Sellers Since 2002</span>
            </div>

            <div className="about-amy-stat">
              <strong>
                <EmojiEventsOutlined className="about-amy-award-icon" />
                Top 10
              </strong>
              <span>2025 Agent · North Attleboro</span>
            </div>

            <div className="about-amy-stat">
              <strong>
                <MilitaryTechOutlined className="about-amy-award-icon" />
                #8 Regional
              </strong>
              <span>Individual Teams · GCI · April 2026</span>
            </div>

            <div className="about-amy-stat">
              <strong>
                <WorkspacePremiumOutlined className="about-amy-award-icon" />
                4× Gold
              </strong>
              <span>Keller Williams · 2021–2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
