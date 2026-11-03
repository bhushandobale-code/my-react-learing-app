
import "../styles/JobCard.css";
 function JobCard(props) {
  return (
    
    <div className="job-card">
      <h2>{props.title}</h2>
      <p>Company:{props.company}</p>
      <p>Location:{props.location}</p>
      <p>Salary:{props.salary}</p>
    </div>
    
  )
}
export default JobCard;