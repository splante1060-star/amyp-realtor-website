import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";

const guidancePoints = [
  {
    eyebrow: "Location & Demand",
    title: "Who is likely to stay here, and when?",
    description:
      "Consider the location, nearby attractions, seasonality, accessibility, and the type of guests the property may appeal to.",
    icon: <PlaceRoundedIcon />,
  },
  {
    eyebrow: "Property Fit",
    title: "Does the property support the way you plan to use it?",
    description:
      "Layout, bedrooms, parking, outdoor space, condition, amenities, and community features can all affect how practical the property may be for rental use.",
    icon: <HomeRoundedIcon />,
  },
  {
    eyebrow: "Rules & Restrictions",
    title: "Is the renal use you have in mind actually allowed?",
    description:
      "Amy helps buyers identify the rules that need to be investigated, including municipal requirements and condo or HOA restrictions.",
    icon: <AssignmentRoundedIcon />,
  },
  {
    eyebrow: "Operating Reality",
    title: "What will owning and operating the property actually require?",
    description:
      "Cleaning, maintenance, furnishing, guest turnover, property management, and distance from the property are all worth considering before you buy.",
    icon: <KeyRoundedIcon />,
  },
  {
    eyebrow: "Resale & Flexibility",
    title: "Would the property still make sense if your plans changed?",
    description:
      "Consider how the property could work if your needs evolve, whether that means different rental use, more personal use, or eventually selling.",
    icon: <CachedRoundedIcon />,
  },
];

export default function AirbnbGuidanceSection() {
  return (
    <section className="airbnb-guidance-section">
      <div className="container airbnb-guidance-container">
        <div className="airbnb-guidance-heading">
          <h2>
            Buying for <em>rental income</em> changes what you should be looking
            for.
          </h2>

          <p>
            A property can be a great home and still not be the right fit for
            your rental goals.
          </p>
          <p>
            Amy helps buyers consider the property through a different lens,
            looking beyond the finishes to the factors that may affect how the
            home can actually be used.
          </p>
        </div>

        <div className="airbnb-guidance-points">
          {guidancePoints.map((point) => (
            <div className="airbnb-guidance-point" key={point.eyebrow}>
              <div className="airbnb-guidance-icon">{point.icon}</div>

              <div className="airbnb-guidance-point-content">
                <h1>{point.eyebrow}</h1>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
