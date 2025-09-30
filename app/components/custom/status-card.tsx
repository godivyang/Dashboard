import React from "react";

interface CustomComponentProps {
    title: string,
    status: string | number
}

let StatusCard: React.FC<CustomComponentProps>;
export default StatusCard = ({ title, status }) => {
    return (<div className="flex w-fit flex-col bg-background rounded shadow-sm p-2">
        <span className="text-xs whitespace-nowrap">{title}</span>
        <span className="text-5xl whitespace-nowrap">{status}</span>
    </div>)
};