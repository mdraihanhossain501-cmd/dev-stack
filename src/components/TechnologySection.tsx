import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../types/technology";

interface TechnologySectionProps {
  onAdd: (technology: Technology) => void;
  stack: Technology[];
}

const TechnologySection = ({
  onAdd,
  stack,
}: TechnologySectionProps) => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    fetch(new URL("../data/technologies.json", import.meta.url))
      .then((response) => response.json())
      .then((data) => setTechnologies(data));
  }, []);

  return (
    <section className="technology-section" id="technologies">
      <div className="section-container">
        <div className="section-heading">
          <p>Explore Technologies</p>

          <h2>Build Your Development Stack</h2>

          <span>
            Choose the technologies you want to explore and add them to your
            stack.
          </span>
        </div>

        <div className="technology-grid">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAdd={onAdd}
              isAdded={stack.some((item) => item.id === technology.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;