const colleges = [
  "IIT Delhi",
  "BITS Pilani",
  "Osmania University",
  "JNTU Hyderabad",
  "NIT Warangal",
  "Delhi University",
  "VIT Vellore",
  "CBIT Hyderabad"
];

const names = [
  "Rahul Sharma",
  "Priya Reddy",
  "Arjun Mehta",
  "Sneha Patel",
  "Neha Singh",
  "Vikram Rao",
  "Kiran Kumar",
  "Pooja Nair",
  "Rohan Das",
  "Divya Kapoor"
];

const statuses = [
  "Pending",
  "Reviewed",
  "Shortlisted",
  "Rejected"
];

const candidates = Array.from({ length: 50 }, (_, index) => ({
  name: names[index % names.length] + " " + (index + 1),
  college: colleges[index % colleges.length],
  assignment: Math.floor(Math.random() * 41) + 60,
  video: Math.floor(Math.random() * 41) + 60,
  ats: Math.floor(Math.random() * 41) + 60,
  github: Math.floor(Math.random() * 41) + 60,
  communication: Math.floor(Math.random() * 41) + 60,
  status: statuses[index % statuses.length],
}));

export default candidates;