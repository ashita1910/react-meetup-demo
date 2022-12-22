import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../ui/Card";

function MeetUpItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  var isFavorite = favoritesCtx.isItemFavorite(props?.MeetUpItem?.id);

  async function isItemFavorite() {
    if (isFavorite) {
      await favoritesCtx.removeFavoriteItem(props?.MeetUpItem?.id);
      await fetch(
        `https://react-meetup-demo-7a609-default-rtdb.firebaseio.com/favorites/${props?.MeetUpItem?.id}.json`,
        {
          method: "DELETE",
        }
      );
    } else {
      const obj = {
        id: props?.MeetUpItem?.id,
        title: props?.MeetUpItem?.title,
        desc: props?.MeetUpItem?.description,
        image: props?.MeetUpItem?.image,
        address: props?.MeetUpItem?.address,
      };
      await favoritesCtx.addFavoriteItem(obj);
      await fetch(
        `https://react-meetup-demo-7a609-default-rtdb.firebaseio.com/favorites/${obj?.id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  }

  return (
    <div className="d-flex align-items-center">
      <Card>
        <img className="card-img-top meetup-img" src={props.MeetUpItem.image} />
        <div className="card-body text-center">
          <h5 className="card-title">{props.MeetUpItem.title}</h5>
          <p className="card-text">{props.MeetUpItem.description}</p>
          <p className="card-text text-danger">{props.MeetUpItem.address}</p>
          <button className="btn btn-danger" onClick={isItemFavorite}>
            {isFavorite ? "Remove From Favorites" : "Add To Favorites"}
          </button>
        </div>
      </Card>
    </div>
  );
}

export default MeetUpItem;
