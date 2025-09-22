import ToggleGroup from "~/components/custom/toggle-group";

const difficulties = ["Easy", "Medium", "Hard", "Insane"];
const modes = ["Words", "Timed"];

export default function TypingBliss() {
    return <div className="flex w-full flex-col">
        <div className="p-1 flex w-full gap-1">
        <span className="font-black">Typing Bliss</span>
        <span className="flex-1"/>
        <span className="flex gap-1 flex-wrap overflow-x-auto">
            <ToggleGroup values={difficulties} multiSelect={true}/>
            <ToggleGroup values={modes} />
        </span>
        </div>
        <div className="flex-1">

        </div>
    </div>
};