import { useState } from "react";
import DashboardStats from "./components/DashboardStats";
import CandidateTable from "./components/CandidateTable";
import CandidateDrawer from "./components/CandidateDrawer";
import ComparisonPanel from "./components/ComparisonPanel";
import initialCandidates from "./data/candidates";
import { calculatePriority } from "./utils/priorityEngine";

function App() {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [minAssignment, setMinAssignment] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [compareNames, setCompareNames] = useState(["", "", ""]);

  let filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch = candidate.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesAssignment =
      minAssignment === "" ||
      candidate.assignment >= Number(minAssignment);

    const matchesStatus =
      statusFilter === "" ||
      candidate.status === statusFilter;

    return matchesSearch && matchesAssignment && matchesStatus;
  });

  if (sortBy === "assignment") {
    filteredCandidates.sort((a, b) => b.assignment - a.assignment);
  }

  if (sortBy === "priority") {
    const order = { P0: 1, P1: 2, P2: 3, P3: 4 };

    filteredCandidates.sort((a, b) => {
      const levelA = calculatePriority(a).level;
      const levelB = calculatePriority(b).level;

      return order[levelA] - order[levelB];
    });
  }

  const handleSaveCandidate = (updatedCandidate) => {
    const updatedList = candidates.map((candidate) =>
      candidate.name === selectedCandidate.name
        ? updatedCandidate
        : candidate
    );

    setCandidates(updatedList);
    setSelectedCandidate(updatedCandidate);
  };

  const handleCompareChange = (index, value) => {
    const updated = [...compareNames];
    updated[index] = value;
    setCompareNames(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-2">
        <h1 className="text-3xl font-bold text-gray-800">
          Candidate Review Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Internal recruiter dashboard for evaluating applicants efficiently
        </p>
      </div>

      <DashboardStats candidates={candidates} />

      <div className="mt-6 grid md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search candidate name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded-xl border bg-white"
        />

        <input
          type="number"
          placeholder="Min Assignment Score"
          value={minAssignment}
          onChange={(e) => setMinAssignment(e.target.value)}
          className="p-3 rounded-xl border bg-white"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-3 rounded-xl border bg-white"
        >
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Reviewed">Reviewed</option>
          <option value="Shortlisted">Shortlisted</option>
          <option value="Rejected">Rejected</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-3 rounded-xl border bg-white"
        >
          <option value="">Sort By</option>
          <option value="assignment">Assignment Score</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        Showing {filteredCandidates.length} candidates
      </p>

      <CandidateTable
        candidates={filteredCandidates}
        onSelectCandidate={setSelectedCandidate}
      />

      <ComparisonPanel
        candidates={candidates}
        selectedNames={compareNames}
        onChange={handleCompareChange}
      />

      <CandidateDrawer
        candidate={selectedCandidate}
        onClose={() => setSelectedCandidate(null)}
        onSave={handleSaveCandidate}
      />
    </div>
  );
}

export default App;