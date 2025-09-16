import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "~/components/toggle-group";

const difficulties = ["Easy", "Medium", "Hard", "Insane"];
const modes = ["Words", "Timed"];

export default function TypingBliss() {
    const [diffSelected, setDiffSelected] = useState(difficulties);
    const [modeSelected, setModeSelected] = useState(modes);

    const changeDiff = (newDiffs:string[]) => {
        setDiffSelected(newDiffs);
    }

    const changeMode = (newModes:string[]) => {
        setModeSelected(newModes);
    }

    return <div className="flex w-full flex-col">
        <div className="p-1 flex w-full gap-1">
        <span className="font-black">Typing Bliss</span>
        <span className="flex-1"/>
        <span className="flex gap-1 flex-wrap overflow-x-auto">
        <ToggleGroup type="multiple" value={diffSelected} onValueChange={changeDiff}>
            {difficulties.map(diff => <ToggleGroupItem value={diff} className="border-1 border-primary cursor-pointer">
                <span className="px-1 text-xs">{diff}</span>
            </ToggleGroupItem>)}
        </ToggleGroup>
        <ToggleGroup type="multiple" value={modeSelected} onValueChange={changeMode}>
            {modes.map(mode => <ToggleGroupItem value={mode} className="border-1 border-primary cursor-pointer">
                <span className="px-1 text-xs">{mode}</span>
            </ToggleGroupItem>)}
        </ToggleGroup>
        </span>
        </div>
        <div className="flex-1">

        </div>
    </div>
};