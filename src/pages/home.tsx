import { useEffect } from "react";
import { Calculator } from "../widgets/calculator/ui/Calculator";
import { Button } from "../components/ui/button";

const Home: React.FC = () => {
  const toggleTheme = () => {
     document.documentElement.classList.toggle('dark');  
  }; 

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <Calculator />
      </div>

      <Button onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </div>

  );
};

export default Home;
