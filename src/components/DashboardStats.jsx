import { calculatePriority } from "../utils/priorityEngine";

function DashboardStats({ candidates }) {
  const total = candidates.length;

  const shortlisted = candidates.filter((candidate) => {
    const result = calculatePriority(candidate);
    return result.level === "P0" || result.level === "P1";
  }).length;

  const reviewed = candidates.length;
  const pending = total - reviewed;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-sm text-gray-500">Total Candidates</p>
        <p className="text-2xl font-bold">{total}</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-sm text-gray-500">Reviewed</p>
        <p className="text-2xl font-bold">{reviewed}</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-sm text-gray-500">Shortlisted</p>
        <p className="text-2xl font-bold">{shortlisted}</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-sm text-gray-500">Pending</p>
        <p className="text-2xl font-bold">{pending}</p>
      </div>
    </div>
  );
}

export default DashboardStats;