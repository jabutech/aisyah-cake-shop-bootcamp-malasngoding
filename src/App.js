import "./App.css";

import Content from "./Components/Content";
import Footer from "./Components/Footer";
import MenuList from "./Components/MenuList";
import SiteHeader from "./Components/SiteHeader";
import SiteInfo from "./Components/SiteInfo";

function App() {
  return (
    <div className="container mx-auto">
      {/* Site Header */}
      <SiteHeader />
      {/* Site Info */}
      <SiteInfo />
      {/* Menu */}
      <div className="bg-gray-100 py-4 mb-14">
        <ul className="flex">
          <MenuList menuName="Bakery" link="/#" />
          <MenuList menuName="Fruit and vegetables" link="/#" />
          <MenuList menuName="Meat and Fish" link="/#" />
          <MenuList menuName="Drinks" link="/#" />
          <MenuList menuName="Kitchen" link="/#" />
          <MenuList menuName="Special nutrition" link="/#" />
          <MenuList menuName="Baby" link="/#" />
          <MenuList menuName="Pharmacy" link="/#" />
        </ul>
      </div>
      {/* Content */}
      <Content />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
