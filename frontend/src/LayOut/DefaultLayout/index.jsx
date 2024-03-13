import Footer from "./Footer/Footer";
import Header from "./Header/Hearder";

const DefaultLayOut = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayOut;
