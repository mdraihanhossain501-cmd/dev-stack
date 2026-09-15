import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="your-stack">
      <div className="stack-header">
        <div>
          <p>Your Stack</p>
          <h2>{stack.length} Technologies</h2>
        </div>

        {stack.length > 0 && (
          <button onClick={onRemoveAll}>Remove All</button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <h3>Your stack is empty</h3>
          <p>
            Add technologies from the list to build your personalized stack.
          </p>
        </div>
      ) : (
        <div className="stack-items">
          {stack.map((technology) => (
            <div className="stack-item" key={technology.id}>
              <img src={technology.icon} alt={technology.name} />

              <div>
                <strong>{technology.name}</strong>
                <span>{technology.category}</span>
              </div>

              <button onClick={() => onRemove(technology.id)}>
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default YourStack;