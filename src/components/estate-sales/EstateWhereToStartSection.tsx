import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import FormatPaintOutlinedIcon from "@mui/icons-material/FormatPaintOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const startPath = [
  {
    number: "01",
    title: "Assess",
    description:
      "Understand the home, timeline, priorities, and what needs to happen first.",
    icon: <AssignmentOutlinedIcon />,
  },
  {
    number: "02",
    title: "Organize",
    description: "Determine what should be removed, donated, sold, or stored.",
    icon: <Inventory2OutlinedIcon />,
  },
  {
    number: "03",
    title: "Prepare",
    description:
      "Coordinate the work needed to make the home ready for market.",
    icon: <FormatPaintOutlinedIcon />,
  },
  {
    number: "04",
    title: "Sell",
    description:
      "Price and position the property, bring it to market, and guide the sale through closing.",
    icon: <HomeOutlinedIcon />,
  },
];

export default function EstateWhereToStartSection() {
  return (
    <section className="estate-start-section">
      <div className="container estate-start-container">
        <div className="estate-start-heading">
          <h2>
            You don't have to have everything figured out before you call.
          </h2>

          <p>
            You may still be sorting through belongings. You may not know what
            the home needs before it can be sold. You may be coordinating with
            family members, or managing everything from another town or state.
            You don't need to have those answers yet.
          </p>
          <p>
            The first step is understanding the situation and creating a plan
            that makes the rest feel manageable.
          </p>
        </div>

        <div className="estate-start-paths">
          {startPath.map((path) => (
            <div className="estate-start-path" key={path.number}>
              <div className="estate-start-icon">{path.icon}</div>

              <div className="estate-start-path-content">
                <h3>{path.title}</h3>
                <p>{path.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
