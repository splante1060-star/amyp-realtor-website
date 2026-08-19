import FormatPaintRoundedIcon from "@mui/icons-material/FormatPaintRounded";
import CleaningServicesRoundedIcon from "@mui/icons-material/CleaningServicesRounded";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUp";

const prepPartners = [
  {
    label: "Painters",
    icon: FormatPaintRoundedIcon,
  },
  {
    label: "Cleaners",
    icon: CleaningServicesRoundedIcon,
  },
  {
    label: "Organizers",
    icon: Inventory2OutlinedIcon,
  },
  {
    label: "Staging by Amy",
    icon: ChairOutlinedIcon,
    featured: true,
  },
  {
    label: "Contractors",
    icon: HandymanOutlinedIcon,
  },
  {
    label: "Landscapers",
    icon: SpaOutlinedIcon,
  },
  {
    label: "Photography",
    icon: PhotoCameraOutlinedIcon,
  },
];

export default function PrepContractorCoordinationSection() {
  return (
    <section className="prep-coordination-section">
      <div className="container prep-coordination-container">
        <div className="prep-coordination-content">
          <h2>You don't have to manage every moving piece yourself.</h2>

          <p>
            Preparing a home for market can involve a lot of moving pieces. When
            work is needed before listing, Amy helps coordinate trusted
            professionals, organize the preparation timeline, and keep
            everything moving toward your launch date.
            <br />
            <br />
            <strong>
              You don't have to figure out what needs to be done, or manage it
              all yourself.
            </strong>{" "}
            Amy helps determine which improvements are actually worth making,
            connects you with the right people when needed, and provides{" "}
            <em>hands-on staging guidance herself</em> as part of the Prep to
            Sell service.
          </p>
        </div>

        <div
          className="prep-coordination-services"
          aria-label="Prep to Sell services and professionals"
        >
          {prepPartners.map(({ label, icon: Icon, featured }) => (
            <div
              key={label}
              className={`prep-coordination-service ${
                featured ? "prep-coordination-service--featured" : ""
              }`}
            >
              <Icon />

              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="prep-coordination-strategy">
          <TrendingUpRoundedIcon className="prep-coordination-strategy-icon" />

          <p>
            <strong>Preparation and pricing work together.</strong> The
            condition of your home, how it compares with competing properties,
            and how buyers are likely to respond all help shape the final launch
            strategy. Preparation decisions aren't made in isolation, they're
            made with the market, positioning, and <em>your goals in mind.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
