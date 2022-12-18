import { useNavigate } from "react-router-dom";
import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetUp() {
  const history = useNavigate();

  function addMeetUp(meetUpData) {
    fetch(
      "https://react-meetup-demo-7a609-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetUpData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        history("/", {
          replace: true,
        });
      })
      .catch((err) => {
        // console.log("err", err);
      });
  }

  return (
    <div>
      <h1 className="my-4 text-center text-decoration-underline">
        Add New Meetup
      </h1>
      <div className="row mx-1 mx-md-0">
        <div className="col-lg-8 mx-auto">
          <NewMeetUpForm addMeetUp={addMeetUp} />
        </div>
      </div>
    </div>
  );
}

export default NewMeetUp;
