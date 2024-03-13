import Header from "../DefaultLayout/Header/Hearder";

const SubPageLayOut = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default SubPageLayOut;
