import { useContext, useEffect, useState } from "react";
import MeetUpList from "../components/meetups/MeetUpList";
import FavoritesContext from "../store/favorites-context";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);
  const [isLoading, LoadingHandler] = useState(true);
  const [meetUpData, HandleMeetUpData] = useState([]);

  useEffect(() => {
    LoadingHandler(true);
    fetch(
      "https://react-meetup-demo-7a609-default-rtdb.firebaseio.com/favorites.json"
    )
      .then((res) => {
        return res?.json();
      })
      .then((data) => {
        LoadingHandler(false);
        let MeetUpArr = [];
        Object.keys(data).forEach((key) => {
          const obj = { ...data[key], id: key };
          MeetUpArr.push(obj);
        });
        HandleMeetUpData(MeetUpArr);
        favoritesCtx.favorites.forEach((item) => {
          favoritesCtx.removeFavoriteItem(item?.id);
        });
        MeetUpArr.forEach((item) => {
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

  let content =
    favoritesCtx.favoritesCount === 0 ? (
      <h4 className="text-center">
        You got no favorites, yet. Please add some!
      </h4>
    ) : (
      <MeetUpList data={favoritesCtx.favorites} />
    );

  return (
    <>
      <h1 className="my-4 text-center text-decoration-underline">
        Favorite MeetUps
      </h1>
      {content}
    </>
  );
}

export default Favorites;
