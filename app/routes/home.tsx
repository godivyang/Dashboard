import { Apple, ArrowLeftFromLine, ArrowRightFromLine, BoomBox, HandCoins, LayoutDashboard, Moon, Sun, TypeOutline, User } from "lucide-react";
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
        
        <aside className="w-fit flex flex-col p-1 pl-0 gap-1 bg-background">
          <span className="flex p-2 font-bold text-2xl items-center justify-between text-blue-500 cursor-pointer" onClick={() => navigateTo("")}>
            <LayoutDashboard/>
            &nbsp;{sideBarExpand && "Dashboard"}
          </span>
          <span className="mt-4 w-fit"/>
          {apps.map(app => {
            return <Button className="flex items-center w-full text-left font-bold justify-between" variant="outline" title={app.name} onClick={() => navigateTo(app.route)}>
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
