import { useState, useEffect } from "react";
import { calculatePriority } from "../utils/priorityEngine";

function CandidateDrawer({ candidate, onClose, onSave }) {
  const [formData, setFormData] = useState(null);

  const [assignmentReview, setAssignmentReview] = useState({
    ui: 7,
    components: 7,
    state: 7,
    edge: 7,
    responsive: 7,
    accessibility: 7,
  });

  const [videoReview, setVideoReview] = useState({
    clarity: 7,
    confidence: 7,
    architecture: 7,
    tradeoff: 7,
    communication: 7,
  });

  useEffect(() => {
    if (candidate) {
      setFormData(candidate);
    }
  }, [candidate]);

  if (!candidate || !formData) return null;

  const result = calculatePriority(formData);

  const handleChange = (field, value) => {
    const updated = {
      ...formData,
      [field]:
        field === "status" ? value : Number(value),
    };

    setFormData(updated);
    onSave(updated);
  };

  const renderSlider = (label, value, setter, key) => (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}: {value}
      </label>

      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) =>
          setter((prev) => ({
            ...prev,
            [key]: Number(e.target.value),
          }))
        }
        className="w-full"
      />
    </div>
  );

  return (
    <div className="fixed top-0 right-0 h-full w-full md:w-[430px] bg-white shadow-2xl p-6 z-50 overflow-y-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{formData.name}</h2>

        <button
          onClick={onClose}
          className="text-xl font-bold text-gray-500"
        >
          ✕
        </button>
      </div>

      <p className="text-gray-500 mt-1">{formData.college}</p>

      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Review Status
          </label>

          <select
            value={formData.status}
            onChange={(e) =>
              handleChange("status", e.target.value)
            }
            className="w-full p-2 border rounded-lg"
          >
            <option>Pending</option>
            <option>Reviewed</option>
            <option>Shortlisted</option>
            <option>Rejected</option>
          </select>
        </div>

        {[
          ["assignment", "Assignment"],
          ["video", "Video"],
          ["ats", "ATS"],
          ["github", "GitHub"],
          ["communication", "Communication"],
        ].map(([key, label]) => (
          <div key={key}>
            <label className="block text-sm font-medium mb-1">
              {label}: {formData[key]}
            </label>

            <input
              type="range"
              min="0"
              max="100"
              value={formData[key]}
              onChange={(e) =>
                handleChange(key, e.target.value)
              }
              className="w-full"
            />
          </div>
        ))}

        <div className="pt-4 border-t">
          <h3 className="font-bold mb-3">
            Assignment Evaluation
          </h3>

          <div className="space-y-3">
            {renderSlider(
              "UI Quality",
              assignmentReview.ui,
              setAssignmentReview,
              "ui"
            )}

            {renderSlider(
              "Component Structure",
              assignmentReview.components,
              setAssignmentReview,
              "components"
            )}

            {renderSlider(
              "State Handling",
              assignmentReview.state,
              setAssignmentReview,
              "state"
            )}

            {renderSlider(
              "Edge Cases",
              assignmentReview.edge,
              setAssignmentReview,
              "edge"
            )}

            {renderSlider(
              "Responsiveness",
              assignmentReview.responsive,
              setAssignmentReview,
              "responsive"
            )}

            {renderSlider(
              "Accessibility",
              assignmentReview.accessibility,
              setAssignmentReview,
              "accessibility"
            )}
          </div>
        </div>

        <div className="pt-4 border-t">
          <h3 className="font-bold mb-3">
            Video Evaluation
          </h3>

          <div className="space-y-3">
            {renderSlider(
              "Clarity",
              videoReview.clarity,
              setVideoReview,
              "clarity"
            )}

            {renderSlider(
              "Confidence",
              videoReview.confidence,
              setVideoReview,
              "confidence"
            )}

            {renderSlider(
              "Architecture",
              videoReview.architecture,
              setVideoReview,
              "architecture"
            )}

            {renderSlider(
              "Tradeoff Reasoning",
              videoReview.tradeoff,
              setVideoReview,
              "tradeoff"
            )}

            {renderSlider(
              "Communication",
              videoReview.communication,
              setVideoReview,
              "communication"
            )}
          </div>
        </div>

       <div className="pt-4 border-t">
  <h3 className="font-bold mb-3">
    Recruiter Notes
  </h3>

  <textarea
    rows="4"
    placeholder="Add observations, communication notes, red flags, strengths..."
    className="w-full border rounded-xl p-3 text-sm"
  ></textarea>

  <p className="font-semibold mt-4">
    Priority Score: {result.score}
  </p>

  <p className="font-bold mt-1">
    Priority Level: {result.level}
  </p>
</div>
      </div>
    </div>
  );
}

export default CandidateDrawer;