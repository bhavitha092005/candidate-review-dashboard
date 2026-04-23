# Candidate Review Dashboard

A production-style internal recruiter dashboard built using **React + Tailwind CSS** to help hiring teams efficiently evaluate and prioritize candidates.

## 🚀 Features

### Candidate Management

* View 50+ candidate profiles in a structured dashboard
* Search candidates by name
* Filter by assignment score
* Filter by review status
* Sort by assignment score or priority

### Candidate Review Panel

* Open candidate details in a side drawer
* Edit scores in real time:

  * Assignment
  * Video
  * ATS
  * GitHub
  * Communication

### Dynamic Priority Engine

Automatically calculates candidate priority using weighted logic:

* Assignment → 30%
* Video → 25%
* ATS → 20%
* GitHub → 15%
* Communication → 10%

Priority Levels:

* P0 → Interview Immediately
* P1 → Strong Shortlist
* P2 → Review Later
* P3 → Reject

### Reviewer Workflow

* Update candidate review status:

  * Pending
  * Reviewed
  * Shortlisted
  * Rejected

### Evaluation Panels

#### Assignment Evaluation

* UI Quality
* Component Structure
* State Handling
* Edge Cases
* Responsiveness
* Accessibility

#### Video Evaluation

* Clarity
* Confidence
* Architecture Explanation
* Tradeoff Reasoning
* Communication Strength

### Candidate Comparison

Compare up to 3 candidates side-by-side.

### UX Features

* Scrollable table
* Empty state handling
* Priority color indicators
* Recruiter notes section
* Responsive layout

---

## 🛠 Tech Stack

* React
* JavaScript
* Tailwind CSS
* Vite

---

## 📦 Installation

```bash
npm install
npm run dev
```

---

## 📁 Project Structure

```bash
src/
 components/
 data/
 utils/
 App.jsx
```

---

## 🎯 Purpose

This project simulates a real-world internal hiring tool used by recruiters to make faster and smarter candidate decisions.

---

## 👩‍💻 Author

Bhavitha Pala
