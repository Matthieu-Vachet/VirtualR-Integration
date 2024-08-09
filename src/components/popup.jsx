import { useState } from "react";

const Popup = () => {
    const [showConsent, setShowConsent] = useState(true);

    const closePopup = () => {
        setShowConsent(false);
    };

    if (!showConsent) {
        return null; // Ne rend rien si showConsent est false
    }

    return (
        <div className="fixed flex items-center justify-center gap-5 bottom-5 md:left-5 w-[90%] md:w-[50%] lg:w-[30%] p-4 border-t border-foreground/30 bg-white/20 backdrop-blur-lg shadow-3xl shadow-background/40 rounded-3xl z-[99]">
            <span className="text-sm md:text-base md:text-start z-[100] text-foreground">
                Ce site est une intégration et une amélioration de la maquette{" "}
                <span className="font-bold">VirtualR</span> créée par{" "}
                <span className="text-orange-500 font-bold">@compiletab</span> de Youtube
            </span>
            <div className="flex flex-col gap-5 justify-center items-center">
                <button
                    onClick={closePopup}
                    className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-5 rounded-md"
                >
                    Ok
                </button>
            </div>
        </div>
    );
};

export default Popup;
