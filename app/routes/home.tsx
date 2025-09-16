import { Apple, ArrowLeftFromLine, ArrowRightFromLine, BoomBox, HandCoins, LayoutDashboard, Moon, Sun, TypeOutline, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Button } from "~/components/button";

type App = {name: string, icon: string};
type Icon = {[key: string]: React.ReactNode};

const apps: App[] = [
  {name:"Ultimate Utility", icon:"BoomBox"}, 
  {name:"Typing Bliss", icon:"TypeOutline"}, 
  {name:"Tracking Budget", icon:"HandCoins"}, 
  {name:"Diet Planner", icon:"Apple"}];

const icons: Icon = {
  BoomBox: <BoomBox/>,
  TypeOutline: <TypeOutline/>,
  HandCoins: <HandCoins/>,
  Apple: <Apple/>
}

export default function Home() {
    const [theme, setTheme] = useState("dark");
    const [sideBarExpand, setSideBarExpand] = useState(false);

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
    }

    return <div className="h-full w-full flex">
        
        <aside className="w-fit flex flex-col p-1 pl-0 gap-1 bg-background">
          <span className="flex p-2 font-bold text-2xl items-center justify-between text-blue-500"><LayoutDashboard/>&nbsp;{sideBarExpand && "Dashboard"}</span>
          <span className="mt-4 w-fit"/>
          {apps.map(app => {
            return <Button className="flex items-center w-full text-left font-bold justify-between" variant="outline" title={app.name}>
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
        <div className="flex flex-1 w-max">
        <Outlet />
        </div>
    </div>;
}
