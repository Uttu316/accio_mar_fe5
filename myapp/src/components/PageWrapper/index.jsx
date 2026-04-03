import Footer from "../Footer";
import Header from "../Header";

const PageWrapper = ({ title, className, children }) => {
  return (
    <div className={className}>
      <Header title={title} />
      {children}
      <Footer />
    </div>
  );
};

export default PageWrapper;
