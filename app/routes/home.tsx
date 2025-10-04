import { Apple, ArrowLeftFromLine, ArrowRightFromLine, BoomBox, HandCoins, LayoutDashboard, Menu, Moon, Sun, TypeOutline, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Outlet } from "react-router";
import { Button } from "~/components/button";

type App = {name: string, icon: string, route: string};
type Icon = {[key: string]: React.ReactNode};

const apps: App[] = [
  {name:"Ultimate Utility", icon:"BoomBox", route: "ultimate-utility"}, 
  {name:"Typing Bliss", icon:"TypeOutline", route: "typing-bliss"}, 
  {name:"Tracking Budget", icon:"HandCoins", route: "tracking-budget"}, 
  {name:"Diet Planner", icon:"Apple", route: "diet-planner"}];

const icons: Icon = {
  BoomBox: <BoomBox/>,
  TypeOutline: <TypeOutline/>,
  HandCoins: <HandCoins/>,
  Apple: <Apple/>
}

export default function Home() {
    const [theme, setTheme] = useState("dark");
    const [sideBarExpand, setSideBarExpand] = useState(false);

    const navTo = useNavigate();

    useEffect(() => {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }, [])

    const toggleTheme = () => {
      if(theme === "dark") {
        setTheme("light");
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      } else {
        setTheme("dark");
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      }
    };
    const toggleSideBar = () => {
      setSideBarExpand(!sideBarExpand);
    };

    const navigateTo = (name:string) => {
      navTo(name);
    };

    return <div className="h-full w-full flex">
        <div className={`${sideBarExpand ? "w-full h-full" : "hidden"} bg-secondary/90 z-10 fixed left-0 md:w-0 md:h-0`} onClick={() => setSideBarExpand(false)}>
        </div>
        <aside className={`w-fit h-full p-1 pl-0 gap-1 bg-background flex-col ${sideBarExpand ? "flex fixed top-0 left-0" : "hidden"} md:static md:flex z-20`}>
          <span className="flex p-2 font-bold text-2xl items-center justify-between text-blue-500 cursor-pointer" onClick={() => navigateTo("")}>
            <LayoutDashboard/>
            &nbsp;{sideBarExpand && "Dashboard"}
          </span>
          <span className="mt-4 w-fit"/>
          {apps.map((app,i) => {
            return <Button className="flex items-center w-full text-left font-bold justify-between" variant="outline" title={app.name} onClick={() => navigateTo(app.route)} key={"Sidebar-button-"+i}>
              {icons[app.icon]} {sideBarExpand && app.name}
            </Button>
          })}
          <span className="flex-1"/>
          <Button variant="outline"><User/>{sideBarExpand && "UserName"}</Button>
          <Button onClick={toggleTheme} variant="outline">
            {theme === "light" ? <Sun/> : <Moon/>}
          </Button>
          <Button variant="outline" onClick={toggleSideBar}>
            {sideBarExpand ? <ArrowLeftFromLine/> : <ArrowRightFromLine/>}
          </Button>
        </aside>
        <div className="flex flex-1 flex-col w-max">
        <Button className="md:hidden flex h-fit w-fit shadow-sm" variant="outline" onClick={() => setSideBarExpand(true)}>
          <Menu/>
        </Button>
        <Outlet />
        </div>
    </div>;
}
