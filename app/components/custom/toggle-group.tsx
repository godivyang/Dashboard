import React, { useState } from "react";
import { ToggleGroup as _ToggleGroup, ToggleGroupItem } from "~/components/toggle-group";

interface CustomComponentProps {
    values: string[],
    selected: string[],
    setSelected: (value:string[])=>void,
    multiSelect?: boolean,
    title?: string
}
let ToggleGroup: React.FC<CustomComponentProps>;
export default ToggleGroup = ({ values, selected=[], setSelected, multiSelect=false, title="" }) => {
    // const [selected, setSelected] = useState<string[]>([]);
    return (multiSelect ?
    <>
    {!!title && <span className="text-xs">{title}</span>}
    <_ToggleGroup type="multiple" value={selected} onValueChange={setSelected}>
        {values.map((value, i) => 
        <ToggleGroupItem value={value} className="border-1 border-primary cursor-pointer" key={`${value}-${i}`}>
            <span className="flex px-1 text-xs">
                {value}
            </span>
        </ToggleGroupItem>)}
    </_ToggleGroup>
    </>
    :
    <>
    {!!title && <span className="text-xs">{title}</span>}
    <_ToggleGroup type="single" value={selected[0]} onValueChange={(val:string) => setSelected([val])}>
        {values.map((value, i) => 
        <ToggleGroupItem value={value} className="border-1 border-primary cursor-pointer" key={`${value}-${i}`}>
            <span className="flex px-1 text-xs">
                {value}
            </span>
        </ToggleGroupItem>)}
    </_ToggleGroup>
    </>)
};