import Sidebar from "./sidebar";
import Main from "./main";
import useScreenSize from "@/hooks/useScreenSize";

const Layout = () => {
  const [screenWidth] = useScreenSize();
  const isMobile = (screenWidth as number) < 768;

  return (
    <div className="h-screen flex flex-col md:flex-row pt-8 pb-12">
      {!isMobile && <Sidebar />}
      <Main />
    </div>
  );
};

export default Layout;
