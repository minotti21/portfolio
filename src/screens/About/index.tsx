'use client'

import { useContext } from "react";
import { UserThemeContext } from "@/context/UserThemeContext";

export default function About() {
    const { theme } = useContext(UserThemeContext);

    return (
        <h1>Sobre</h1>
    );
}