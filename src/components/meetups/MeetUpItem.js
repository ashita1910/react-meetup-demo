import Card from "../ui/Card";

function MeetUpItem(props) {
  return (
    <div className="d-flex align-items-center">
      <Card>
        <img className="card-img-top meetup-img" src={props.MeetUpItem.image} />
        <div className="card-body text-center">
          <h5 className="card-title">{props.MeetUpItem.title}</h5>
          <p className="card-text">{props.MeetUpItem.description}</p>
          <p className="card-text text-danger">{props.MeetUpItem.address}</p>
        </div>
      </Card>
    </div>
  );
}

export default MeetUpItem;
