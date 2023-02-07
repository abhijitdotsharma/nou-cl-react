import React from "react";
import "./Button.css";

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
        style={{
            border: `1px solid ${colorScheme}`,
            backgroundColor: variant === "solid" ? colorScheme: "white",
            color: variant === "solid"? "white" : colorScheme,
        }}
        className={
            `btn btn-${variant} btn-${size}`
        }
        >
            {label}
        </button>
    )
}

export default Button;
