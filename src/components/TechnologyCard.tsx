import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <article className="technology-card">
      <div className="technology-card-top">
        <img src={technology.icon} alt={technology.name} />

        <span className="technology-badge">
          {technology.badge}
        </span>
      </div>

      <h3>{technology.name}</h3>

      <p>{technology.description}</p>

      <div className="technology-info">
        <span>{technology.category}</span>
        <span>{technology.difficulty}</span>
        <span>★ {technology.rating}</span>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className="add-stack-button"
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
};

export default TechnologyCard;