import Jobs from "../components/Jobs";
import jobHero from "../img/job_hero.png"

function Job() {
    return(
      <div className="container">
        <div className="hero">
           <img src={jobHero} alt="job icon" />
        </div>
        <Jobs/>
      </div>
    )
  }
  
  export default Job;
  