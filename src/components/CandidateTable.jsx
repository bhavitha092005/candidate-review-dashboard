import { calculatePriority } from "../utils/priorityEngine";

function CandidateTable({ candidates, onSelectCandidate }) {
  const getPriorityColor = (priority) => {
    if (priority === "P0") return "bg-green-100 text-green-700";
    if (priority === "P1") return "bg-yellow-100 text-yellow-700";
    if (priority === "P2") return "bg-orange-100 text-orange-700";
    return "bg-red-100 text-red-700";
  };

  if (candidates.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow mt-6 p-10 text-center">
        <h3 className="text-lg font-semibold text-gray-700">
          No candidates found
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          Try adjusting search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow mt-6 overflow-hidden">
      <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-200 text-left sticky top-0">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">College</th>
              <th className="p-3">Assignment</th>
              <th className="p-3">Video</th>
              <th className="p-3">ATS</th>
              <th className="p-3">Priority</th>
            </tr>
          </thead>

          <tbody>
            {candidates.map((candidate, index) => {
              const result = calculatePriority(candidate);

              return (
                <tr
                  key={index}
                  onClick={() => onSelectCandidate(candidate)}
                  className="border-t hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-3">{candidate.name}</td>
                  <td className="p-3">{candidate.college}</td>
                  <td className="p-3">{candidate.assignment}</td>
                  <td className="p-3">{candidate.video}</td>
                  <td className="p-3">{candidate.ats}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(
                        result.level
                      )}`}
                    >
                      {result.level}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CandidateTable;