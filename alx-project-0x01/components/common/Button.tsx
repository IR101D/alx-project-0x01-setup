import React from "react";
import { Buttonprops } from "@/interfaces";

const Button: React.FC<Buttonprops> = ({title, styles}) => {
    return (
        <button className={"bg-blue-600 text-white font-semibold ${syles}"}>
            {title}
        </button>
    )
}
export default Button
