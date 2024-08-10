import React from "react";
import useStatsCounter from "../hooks/useStatsCounter";

const StatsCounter = ({ count }) => {
  const displayedCount = useStatsCounter(count);
  return <h1 className="text-bold yellow">{displayedCount}</h1>;
};

export default StatsCounter;
