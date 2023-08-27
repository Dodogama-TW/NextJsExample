'use client'
import { useState, useEffect } from "react"

type AvailabilityToggleProps = {
    checked: boolean
    onChange?: () => void
}

export default function AvailabilityToggle(props: AvailabilityToggleProps) {
    const [checked, setChecked] = useState<boolean>(props.checked)
    const onClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(!checked)
        props.onChange
    }
    const checkedBackgroundColor = "peer-checked/in:bg-green-100"
    const checkedToggleBackgroundColor = "peer-checked/in:bg-green-700"
    const checkedBorderColor = "peer-checked/in:border-green-700"
    const checkedTextColor = "peer-checked/in:text-green-700"

    const originBackgroundColor = "bg-orange-100"
    const originToggleBackgroundColor = "bg-orange-700"
    const originBorderColor = "border-orange-700"
    const originTextColor = "text-orange-700"

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-1">
                <label className="relative item-center cursor-pointer">
                    <input type="checkbox" value="available" className="sr-only peer/in" checked={checked} onChange={(e) => onClick(e)} />
                    <div className={`absolute text-sm select-none translate-x-[32px] top-0.5 duration-300 ${originTextColor} peer-checked/in:translate-x-[22px] ${checkedTextColor}`}>
                        {checked ? "Available" : "Unavailable"}
                    </div>
                    <div className={`absolute w-[20px] h-[20px] rounded-full translate-x-[2px] top-0.5 duration-300 ${originToggleBackgroundColor} peer-checked/in:translate-x-[98px] ${checkedToggleBackgroundColor}`}></div>
                    <div className={`flex w-[120px] h-[24px] rounded-full border ${originBackgroundColor} ${originBorderColor} ${checkedBackgroundColor} ${checkedBorderColor}`}></div>
                </label>
            </div>
            <div className="flex flex-row space-x-1">
                <label className="relative item-center cursor-pointer">
                    <input type="checkbox" value="available" className="sr-only peer/in" checked={checked} onChange={(e) => onClick(e)} />
                    <div className={`absolute text-sm select-none translate-x-[32px] top-0.5 duration-300 ${originTextColor} peer-checked/in:translate-x-[22px] ${checkedTextColor}`}>
                        {checked ? "Available" : "Unavailable"}
                    </div>
                    <div className={`absolute w-[20px] h-[20px] rounded-full translate-x-[2px] top-0.5 duration-300 bg-slate-400 peer-checked/in:translate-x-[98px]`}></div>
                    <div className={`flex w-[120px] h-[24px] rounded-full border ${originBackgroundColor} ${originBorderColor} ${checkedBackgroundColor} ${checkedBorderColor}`}></div>
                </label>
            </div>
            <div className="flex flex-row space-x-1">
                <label className="relative item-center cursor-pointer">
                    <input type="checkbox" value="available" className="sr-only peer/in" checked={checked} onChange={(e) => onClick(e)} />
                    <div className={`absolute text-sm select-none translate-x-[32px] top-0.5 duration-300 ${originTextColor} peer-checked/in:translate-x-[22px] ${checkedTextColor}`}>
                        {checked ? "Available" : "Unavailable"}
                    </div>
                    <div className={`absolute w-[20px] h-[20px] rounded-full translate-x-[2px] top-0.5 duration-300 bg-slate-100 border ${originBorderColor} peer-checked/in:translate-x-[98px] ${checkedBorderColor}`}></div>
                    <div className={`flex w-[120px] h-[24px] rounded-full border ${originBackgroundColor} ${originBorderColor} ${checkedBackgroundColor} ${checkedBorderColor}`}></div>
                </label>
            </div>
        </div>

    )
}