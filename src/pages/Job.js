import Jobs from "../components/Jobs";
import jobHero from "../img/job_hero.png"

function Job() {
  return (

    <div>
      <div className="container">
        <div className="pageName">
          <h1>/Work with us</h1>
        </div>
        <div className="pageSlogan">
          <p>
            Hey! We’re hiring!
            The following positions are currently available.
            Click on the link to see the job offer.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="hero">
          <img src={jobHero} alt="job icon" />
        </div>
        <Jobs />
      </div>
    </div>
  )
}

export default Job;
