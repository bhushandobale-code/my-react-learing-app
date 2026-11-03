
import { useState } from "react";
import "../styles/Home.css";
import JobCard from "../components/JobCard";

function Job() {
  const [searchTerm, setSearchTerm] = useState("");

  // Jobs data
  const jobs = [
    {
      id: 1,
      title: "React Developer",
      company: "TCS",
      location: "Pune",
      salary: "₹3-5 LPA",
    },
    {
      id: 2,
      title: "Angular Developer",
      company: "HCL",
      location: "Mumbai",
      salary: "₹3-5 LPA",
    },
    {
      id: 3,
      title: "Flutter Developer",
      company: "Cognizant",
      location: "Pune",
      salary: "₹4-6 LPA",
    },
    {
      id: 4,
      title: "Laravel Developer",
      company: "Wipro",
      location: "Nagpur",
      salary: "₹3-4 LPA",
    },
    {
      id: 5,
      title: "PHP Developer",
      company: "TCS",
      location: "Pune",
      salary: "₹3-6 LPA",
    },
    {
      id: 6,
      title: "Python Developer",
      company: "HCL",
      location: "Hyderabad",
      salary: "₹3-5 LPA",
    },
  ];

  // Filter logic
  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="home-container">
      <div className="home">
        <h1>All Jobs</h1>

        <input
          className="form-control mb-3"
          type="search"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <p className="results-count" style={{ color: "white" }}>
          {filteredJobs.length} jobs found
        </p>

        <div className="home-box">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              salary={job.salary}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Job;
