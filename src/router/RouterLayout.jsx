import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

export default function RouterLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
