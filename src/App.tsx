import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

import type { Technology } from "./types/technology";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAdd = (technology: Technology) => {
    setStack((currentStack) => {
      if (currentStack.some((item) => item.id === technology.id)) {
        toast.warning("This technology is already in your stack.");
        return currentStack;
      }

      toast.success(`${technology.name} added to your stack.`);

      return [...currentStack, technology];
    });
  };

  const handleRemove = (id: number) => {
    const technology = stack.find((item) => item.id === id);

    setStack((currentStack) =>
      currentStack.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <div className="main-layout">
          <TechnologySection
            onAdd={handleAdd}
            stack={stack}
          />

          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </main>

      <Footer />

      <ToastContainer position="top-right" />
    </>
  );
}

export default App;