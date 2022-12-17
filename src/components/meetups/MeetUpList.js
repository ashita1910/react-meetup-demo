import MeetUpItem from "./MeetUpItem";

function MeetUpList(props) {
  return (
    <ul className="list-group d-flex align-items-center">
      {props.data?.map((item) => {
        return (
          <li key={item?.id} className="list-group-item mb-4 p-0 meetup-item">
            <MeetUpItem MeetUpItem={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default MeetUpList;
