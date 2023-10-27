import React from "react";

function Footer(){
    return(
        <div>
            <footer className="bg-blue-500 text-lg text-white text-center py-2 h-[100px] justify-center items-center">
                <p className="pt-2"> </p>
                <p>&copy; {new Date().getFullYear()} Piggy Bank</p>
                <p className="py-1">Created by: Aidan Garry, Megan Johnson, Koleton Murray, Allison Winder</p>
            </footer>
        </div>
    )

}

export default Footer;