import style from "../../src/style.css"

function Card(props) {
    return (
      <div className="card">
        <img src = {props.item.imageUrl} className="card-image" />
        <div className="card-textDisplay">
            <p>{props.item.location}</p>
            <h3>{props.item.title}</h3>
            <div className="card-desc">
                <p>{props.item.startDate} - {props.item.endDate}</p>
            </div>
            <p>{props.item.description}</p>
        </div>

      </div>
    )
  }

  export default Card