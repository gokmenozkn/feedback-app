import { useEffect } from "react";
import Roadmap from "../components/Roadmap";

function RoadmapPage() {
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);
  return <Roadmap />;
}

export default RoadmapPage;
