import MainHeader from "./header";
import HomeView from "../pages/home/home";

const Main = () => {
  return (
    <div className="px-8 w-full h-full overflow-hidden">
      <MainHeader />
      <HomeView />
    </div>
  );
};

export default Main;
