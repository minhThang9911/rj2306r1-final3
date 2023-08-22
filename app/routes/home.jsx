import { Outlet } from "@remix-run/react";
import Sidebar from "../layouts/Sidebar/Sidebar";
import menuSidebar from "./../config/menuSidebar";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import * as S from "../layouts/Home/style";

function HomePage() {
    return (
        <div>
            {/* <Header /> */}
            <S.Container>
                <Sidebar menuList={menuSidebar} />
                <S.Main>
                    <Outlet />
                </S.Main>
            </S.Container>
            {/* <Footer /> */}
        </div>
    );
}

export default HomePage;
