export function calculatePriority(candidate) {
  const score =
    candidate.assignment * 0.30 +
    candidate.video * 0.25 +
    candidate.ats * 0.20 +
    candidate.github * 0.15 +
    candidate.communication * 0.10;

  let level = "P3";

  if (score >= 85) level = "P0";
  else if (score >= 75) level = "P1";
  else if (score >= 60) level = "P2";

  return {
    score: score.toFixed(1),
    level,
  };
}