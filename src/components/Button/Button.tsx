import React from "react";
// import "./Button.css";
import "../../index.css";

export interface ButtonProps {

    /**
     * variant of Button - solid | outline
     */
    variant: "solid" | "outline", 

    
   /**
    * What background color to use
    */
    colorScheme: string,

    label: string,

    /**
     * size of the button
     */
    size: "xs" | "sm" | "md" | "lg",
}


const colors = {
    black: "#44403C",
    blue: "#7E22CE",
}

const Button = ({
    colorScheme = colors.blue,
    label = "Button",
    size = "sm",
    variant = "solid",

}: ButtonProps) => {
    return (
        <button 
        className='text-9xl'
        >
            {label}
        </button>
    )
}

export default Button;
