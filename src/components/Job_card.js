import jobIcon from "../img/job_icon_1.png"
function Job_card() {
  const animalList=['Lion','Tiger','Elephant','Giraffe'];
    return(
      <div>
        <div >
          {
        animalList.map((animal,index)=>{
          return <div className="job_row" key={index}>
            <div className="job_icon">
                <img src={jobIcon} alt="job icon" />
            </div>
            <div className="job_description">
                <h2>{animal}</h2>
                <div className="tags">
                  
                <span>#webapp</span>
                <span>#React</span>
                <span>#Python Automation</span>
                </div>
            </div>
            <a href="#">Applay now</a>
            
            
            
            </div>
        })
      }
            {/* <div className="job_icon">
                <img src={jobIcon} alt="job icon" />
            </div>
            <div className="job_description">
                <h2>Junior front end dev</h2>
                <div className="tags">
                  
                <span>#webapp</span>
                <span>#React</span>
                <span>#Python Automation</span>
                </div>
            </div>
           <a href="#">Applay now</a> */}
        </div>

      </div>

    )
  }
  
  export default Job_card;