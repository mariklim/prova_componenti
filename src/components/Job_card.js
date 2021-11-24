import jobIcon from "../img/job_icon_1.png"
function Job_card() {
  const JoblList = [
    {'name':'Junior front end dev',
    'tags': '#webapp, #React, #Python Automation',
    'link': 'https://www.linkedin.com/jobs/view/2801348656/?refId=R1Iy1elZX%2F8kJhTXXp9yAA%3D%3D'
    },
    {'name':'Senior front end dev',
    'tags': '#webapp, #React, #Python Automation',
    'link': 'https://www.linkedin.com/jobs/view/2801348656/?refId=R1Iy1elZX%2F8kJhTXXp9yAA%3D%3D'
    },
    {'name':'Middle front end dev',
    'tags': '#webapp, #React, #Python Automation',
    'link': 'https://www.linkedin.com/jobs/view/2801348656/?refId=R1Iy1elZX%2F8kJhTXXp9yAA%3D%3D'
    },
    ];
  return (
      <div>
        {
          JoblList.map((job, index) => {
            return <div className="job_row" key={index}>
              <div className="job_icon">
                <img src={jobIcon} alt="job icon" />
              </div>
              <div className="job_description">
                <h2>{job.name}</h2>
                <div className="tags">
                  <span>{job.tags}</span>
                </div>
              </div>
              <a href={job.link}  target="_blank">Applay now</a>
            </div>
          })
        }
      
      </div>

  )
}

export default Job_card;