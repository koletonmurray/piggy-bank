import React from "react";
import { useSettings } from "../contexts/SettingsContext";

function Footer(){
    const { settings } = useSettings();

    const primaryColor = settings.color === 'cottonCandy' ? 'bg-blue-500' : 'bg-green-900';

    return(
        <div>
            <footer className={`${primaryColor} text-lg text-white text-center py-2 h-[100px] justify-center items-center`}>
                <p className="pt-2"> </p>
                <p>&copy; {new Date().getFullYear()} Piggy Bank</p>
                <p className="py-1">Created by: Aidan Garry, Megan Johnson, Koleton Murray, Allison Winder</p>
            </footer>
        </div>
    )

}

export default Footer;