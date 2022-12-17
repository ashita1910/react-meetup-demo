import Card from "../ui/Card";

function NewMeetUpForm() {
  return (
    <Card>
      <form className="p-5">
        <div className="form-group">
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Meetup title"
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            className="form-control"
            id="image"
            placeholder="Meetup image"
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="address">Meetup Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Meetup address"
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="description">Meetup Description</label>
          <textarea
            className="form-control"
            id="description"
            placeholder="Meetup description"
            rows="5"
          ></textarea>
        </div>
        <div className="mt-4">
          <button className="btn btn-danger">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetUpForm;
