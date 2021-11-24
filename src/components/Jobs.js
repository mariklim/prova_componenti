import Job_card from "./Job_card";


function Jobs() {
    return(
      <div className="box">
        <nav>
          <ul>
            <li>
              <a href="#">All</a>
            </li>
            <li>
              <a href="#">Dev</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Accouting</a>
            </li>
          </ul>
        </nav>
        <Job_card/>
      </div>
    
    )
  }
  
  export default Jobs;
  