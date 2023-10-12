import { Outlet } from "react-router-dom"
import MainHeader from "../componants/MainHeader"

export const RootLayout = () => {
  return (
    <>
    <MainHeader/>
    <Outlet/>
    </>
  )
}
