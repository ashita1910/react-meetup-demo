import { useContext, useEffect, useState } from "react";
import MeetUpList from "../components/meetups/MeetUpList";
import FavoritesContext from "../store/favorites-context";

function AllMeetUps() {
  const [isLoading, LoadingHandler] = useState(true);
  const [meetUpData, HandleMeetUpData] = useState([]);
  const favoritesCtx = useContext(FavoritesContext);

  useEffect(() => {
    LoadingHandler(true);

    fetch(
      "https://react-meetup-demo-7a609-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        LoadingHandler(false);
        let MeetUpArr = [];
        Object.keys(data).forEach((key) => {
          const obj = { ...data[key], id: key };
          MeetUpArr.push(obj);
        });
        HandleMeetUpData(MeetUpArr);
      });

    fetch(
      "https://react-meetup-demo-7a609-default-rtdb.firebaseio.com/favorites.json"
    )
      .then((res) => {
        return res?.json();
      })
      .then((data) => {
        LoadingHandler(false);
        let favMeetUpArr = [];
        Object.keys(data).forEach((key) => {
          const obj = { ...data[key], id: key };
          favMeetUpArr.push(obj);
        });
        favMeetUpArr.forEach((item) => {
          favoritesCtx.removeFavoriteItem(item?.id);
        });
        favMeetUpArr.forEach((item) => {
          favoritesCtx.addFavoriteItem(item);
        });
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <h3 className="d-flex justify-content-center mt-5">Loading...</h3>
      </>
    );
  }

  return (
    <>
      <h1 className="my-4 text-center text-decoration-underline">
        All Meet Ups
      </h1>
      <MeetUpList data={meetUpData} />
    </>
  );
}

export default AllMeetUps;
