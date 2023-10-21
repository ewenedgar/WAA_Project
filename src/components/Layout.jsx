import Navbar from "./Navbar";
import Footer from "./footer";

function Layout({ children, className }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className={`mx-auto mb-20 ${className}`}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
