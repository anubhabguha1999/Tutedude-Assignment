import data from '../backend/data.js';
import './main.css';

const main=()=>{
    return(
     <div className="main">
      <b> How does it work? </b>  
      <div className="main-card">
        {
        data.map((item)=>{

        return <div className="informations" key={item.id}>
                <div className="icons">
                    <img src={item.path} alt="icon" />
                </div>
                <div className="comment">
                <div className="title" >
                    {item.title}
                </div>
                <div className="description">
                    {item.desc}
                </div>
                </div>
            </div>
        })
        }
      </div>
     </div>
    )
}

export default main;