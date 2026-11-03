
import "../styles/Home.css";

import JobCard from "../components/JobCard";
function Home( { searchTerm } ) {
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
      title: "php Developer",
      company: "TCS",
      location: "Pune",
      salary: "₹3-6 LPA",
    },
     {
      id: 6,
      title: "python Developer",
      company: "HCL",
      location: "Hyderabad",
      salary: "₹3-5 LPA",
    },

  ];
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
        <h3>YOUR CAREER STARTS HERE</h3>
        <h1>Discover Opportunities. Build Your Future. </h1>
        <p>Connect with top opportunities, explore exciting careers, and find the right job to achieve your professional goals.</p>
   
    </div>
    </div>
  );
}

export default Home;
