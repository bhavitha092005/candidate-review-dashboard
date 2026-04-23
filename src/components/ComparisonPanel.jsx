import { calculatePriority } from "../utils/priorityEngine";

function ComparisonPanel({ candidates, selectedNames, onChange }) {
  const selectedCandidates = candidates.filter((candidate) =>
    selectedNames.includes(candidate.name)
  );

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-8">
      <h2 className="text-xl font-bold mb-4">
        Candidate Comparison
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {[0, 1, 2].map((index) => (
          <select
            key={index}
            value={selectedNames[index] || ""}
            onChange={(e) => onChange(index, e.target.value)}
            className="p-3 border rounded-xl"
          >
            <option value="">Select Candidate</option>

            {candidates.map((candidate) => (
              <option
                key={candidate.name}
                value={candidate.name}
              >
                {candidate.name}
              </option>
            ))}
          </select>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {selectedCandidates.map((candidate) => {
          const result = calculatePriority(candidate);

          return (
            <div
              key={candidate.name}
              className="border rounded-xl p-4"
            >
              <h3 className="font-bold text-lg">
                {candidate.name}
              </h3>

              <p className="text-sm text-gray-500 mb-3">
                {candidate.college}
              </p>

              <div className="space-y-2 text-sm">
                <p>Assignment: {candidate.assignment}</p>
                <p>Video: {candidate.video}</p>
                <p>ATS: {candidate.ats}</p>
                <p>Priority: {result.level}</p>
                <p>Score: {result.score}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ComparisonPanel;