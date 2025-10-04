import { Filter, X } from "lucide-react";
import { useState } from "react";
import StatusCard from "~/components/custom/status-card";
import ToggleGroup from "~/components/custom/toggle-group";

const difficulties = ["Easy", "Medium", "Hard", "Insane"];
const modes = ["Words", "Timed"];

export default function TypingBliss() {
    const [showFilterDialog, setShowFilterDialog] = useState(false);
    const [diffSelected, setDiffSelected] = useState<string[]>([]);
    const [modeSelected, setModeSelected] = useState<string[]>([]);

    return <div className="flex w-full h-full flex-col">
        <div className={`${showFilterDialog ? "w-full h-full" : "w-0 h-0"} bg-secondary/90 absolute right-0 top-0 z-10`} onClick={() => setShowFilterDialog(false)}>
        </div>
        <div className="p-1 flex w-full gap-1 relative">
        <span className="font-black">Typing Bliss</span>
        <span className="flex-1"/>
        
        <div className={`h-fit m-1 fixed right-0 rounded bg-background shadow-sm ${showFilterDialog ? "p-1 z-20" : "p-0"}`}>
            <span className="flex text-sm">
                <span onClick={() => setShowFilterDialog(true)} className="flex items-center bg-secondary p-1 rounded cursor-pointer shadow-sm">
                    <Filter size={15}/>
                    <span className="font-black hidden md:block">Filters</span>
                </span>
                <span className="flex-1"/>
                {showFilterDialog && <X onClick={() => setShowFilterDialog(false)} className="flex items-center bg-secondary p-1 rounded cursor-pointer shadow-sm"/>}
            </span>
            {showFilterDialog && 
            <span className="flex p-1 gap-1 flex-col overflow-x-auto">
                <ToggleGroup values={difficulties} selected={diffSelected} setSelected={setDiffSelected} multiSelect={true} title="Difficulty"/>
                <ToggleGroup values={modes} selected={modeSelected} setSelected={setModeSelected} title="Modes"/>
            </span>
            }
        </div>
        
        </div>
        <div className="flex-1">
            <div className="flex gap-1 p-1 w-full flex-wrap">
                <StatusCard title="Tests Taken" status="888"/>
                <StatusCard title="Words Typed" status="88,888"/>
                <StatusCard title="Average WPM" status="88.88"/>
                <StatusCard title="Average Accuracy" status="88.88"/>
                <StatusCard title="Time Spent" status="8h 88m 88s"/>
            </div>
        </div>
    </div>
};