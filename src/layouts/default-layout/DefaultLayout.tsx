import { Outlet } from "react-router-dom";
import './DefaultLayout.scss';
import Header from "../../components/header/Header.tsx";
import Footer from "../../components/footer/Footer.tsx";

const DefaultLayout = () => {
  return (
    <div className="default-layout">
      <div className="default-layout__header">
        <Header />
      </div>
      <main className="default-layout__body">
        <Outlet />
      </main>
      <div className="default-layout__footer">
        <Footer />
      </div>
    </div>
  )
}

export default DefaultLayout;