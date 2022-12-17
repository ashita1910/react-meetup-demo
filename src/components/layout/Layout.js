import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <section>{props.children}</section>
    </div>
  );
}

export default Layout;
