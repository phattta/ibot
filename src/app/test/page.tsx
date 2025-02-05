import React from "react";
import Image from "next/image";

export default function Page() {
    return (
        <div
            className="relative"
            style={{
                width: "124.479px",
                height: "83.8675px",
                transform: "translate(733.01px, 591.626px) rotate(-14deg)",
                touchAction: "pan-x pan-y pinch-zoom",
            }}
        >
            <div className="relative">
                <div className="flex justify-center items-center">
                    <div className="overflow-hidden">
                        <div
                            className="relative"
                            style={{
                                width: "124.479px",
                                height: "83.8675px",
                                transform: "translate(0px, 0px) rotate(0deg)",
                            }}
                        >
                            <Image
                                src="/428ab916-b798-41a4-98c9-40fdf8842943.png" // Path to your local image
                                alt="Hand drawn curved dotted line"
                                width={124} // Provide explicit width
                                height={84} // Provide explicit height
                                className="w-full h-auto"
                                draggable="false"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 pointer-events-none" style={{ transformOrigin: "0px 0px", width: "112.685px", transform: "scale(1.10466)",}}>
            </div>
        </div>
    );
}
