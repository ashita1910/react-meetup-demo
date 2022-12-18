import { useRef } from "react";
import Card from "../ui/Card";

function NewMeetUpForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const titleValue = titleRef.current.value;
    const imageValue = imageRef.current.value;
    const addressValue = addressRef.current.value;
    const descValue = descRef.current.value;

    const meetUpData = {
      title: titleValue,
      image: imageValue,
      address: addressValue,
      description: descValue,
    };

    props.addMeetUp(meetUpData);
  }

  return (
    <Card>
      <form className="p-5" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Meetup title"
            required
            ref={titleRef}
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            className="form-control"
            id="image"
            placeholder="Meetup image"
            required
            ref={imageRef}
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="address">Meetup Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Meetup address"
            required
            ref={addressRef}
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="description">Meetup Description</label>
          <textarea
            className="form-control"
            id="description"
            placeholder="Meetup description"
            rows="5"
            required
            ref={descRef}
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
