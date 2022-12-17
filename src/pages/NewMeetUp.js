import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetUp() {
  return (
    <div>
      <h1 className="my-4 text-center text-decoration-underline">
        Add New Meetup
      </h1>
      <div className="row mx-1 mx-md-0">
        <div className="col-lg-8 mx-auto">
          <NewMeetUpForm />
        </div>
      </div>
    </div>
  );
}

export default NewMeetUp;
