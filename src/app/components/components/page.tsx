"use client";

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Image from "next/image";

interface MapPoint {
    id: number;
    name: string;
    description: string;
    positionX: number;
    positionY: number;
    isCompleted: boolean;
}

export default function Page() {
    const [mapData, setMapData] = useState<MapPoint[]>([]);
    const [activeLesson, setActiveLesson] = useState<number | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        setIsLoggedIn(!!token);

        const initialLessons: MapPoint[] = [
            { id: 1, name: "C1", description: "Cargo Retriveval", positionX: 17, positionY: 21, isCompleted: false },
            { id: 2, name: "C2", description: "Dizzy Drill", positionX: 37.90, positionY: 26, isCompleted: false },
            { id: 3, name: "C3", description: "Orange Farm", positionX: 59, positionY: 30, isCompleted: false },
            { id: 4, name: "C4", description: "Traln", positionX: 88, positionY: 34, isCompleted: false },
            { id: 5, name: "C5", description: "Moving Container", positionX: 86, positionY: 57, isCompleted: false },
            { id: 6, name: "C6", description: "Container Handlng", positionX: 57.50, positionY: 48, isCompleted: false },
            { id: 7, name: "C7", description: "Keeper Ball", positionX: 33, positionY: 44, isCompleted: false },
            { id: 8, name: "C8", description: "Logistic", positionX: 13, positionY: 56, isCompleted: false },
            { id: 9, name: "C9", description: "square Box", positionX: 17, positionY: 68, isCompleted: false },
            { id: 10, name: "C10", description: "Maze Runner", positionX: 30, positionY: 80, isCompleted: false },
            { id: 11, name: "C11", description: "Line Tracking", positionX: 38, positionY: 64, isCompleted: false },
            { id: 12, name: "C12", description: "Vacuum", positionX: 56, positionY: 76, isCompleted: false },
            { id: 13, name: "C13", description: "Teaffic Lights", positionX: 75.60, positionY: 70, isCompleted: false },
            { id: 14, name: "C14", description: "Analysis", positionX: 93, positionY: 77, isCompleted: false },
            { id: 15, name: "1", description: "Movement Certificate", positionX: 74, positionY: 30, isCompleted: false },
            { id: 16, name: "2", description: "MoveObject Challenge Certificate", positionX: 11, positionY: 40, isCompleted: false },
            { id: 17, name: "3", description: "Decision Making Certificate", positionX: 42, positionY: 80, isCompleted: false },
            { id: 18, name: "4", description: "Grand Challenge Certificate", positionX: 83, positionY: 86, isCompleted: false },
        ];

        setMapData(initialLessons);
    }, []);

    const handleClick = (id: number) => {
        if (!isLoggedIn) {
            Swal.fire({
                title: "Access Denied",
                text: "You must log in to access this lesson.",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
        }
        setActiveLesson(id);
    };

    const completeLesson = () => {
        if (activeLesson !== null) {
            setMapData((prevData) =>
                prevData.map((lesson) =>
                    lesson.id === activeLesson ? { ...lesson, isCompleted: true } : lesson
                )
            );
            setActiveLesson(null);
        }
    };

    return (
        <div
            className="bg-blue-200 flex items-center justify-center relative w-full max-w-[1890px] h-[1090px] mx-auto rounded-lg bg-cover bg-center"
            style={{
                backgroundImage: "url('/cbb68ed6-5f53-4cd4-9c4c-7685f02c2581.png')",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* ภาพที่เพิ่ม */}
            <div
                style={{
                    position: "absolute",
                    top: "61.80%", // Adjust position as needed
                    left: "82%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/m.png"
                    alt="Mountain"
                    width={180}
                    height={180}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "61%", // Adjust position as needed
                    left: "31%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/m.png"
                    alt="Mountain"
                    width={230}
                    height={230}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "67.30%",
                    left: "60%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/a.png"
                    alt="Treasure Chest"
                    width={150}
                    height={150}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "78%",
                    left: "81%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/a.png"
                    alt="Treasure Chest"
                    width={100}
                    height={100}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "40%",
                    left: "43.80%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/a.png"
                    alt="Treasure Chest"
                    width={100}
                    height={100}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "40%",
                    left: "67%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/a.png"
                    alt="Treasure Chest"
                    width={100}
                    height={100}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "34%",
                    left: "89.60%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/a.png"
                    alt="Treasure Chest"
                    width={100}
                    height={100}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "90%",
                    left: "5.40%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/g.png"
                    alt="Treasure Chest"
                    width={130}
                    height={130}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "23%",
                    left: "80%",
                    transform: "translate(110%, -80%)",
                }}
            >
                <Image
                    src="/u.png"
                    alt="Treasure Chest"
                    width={180}
                    height={180}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "12%",
                    left: "28%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/u.png"
                    alt="Treasure Chest"
                    width={200}
                    height={200}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "92%",
                    left: "14.40%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/u.png"
                    alt="Treasure Chest"
                    width={160}
                    height={160}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "94%",
                    left: "46%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/u.png"
                    alt="Treasure Chest"
                    width={160}
                    height={160}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "89%",
                    left: "88%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/u.png"
                    alt="Treasure Chest"
                    width={160}
                    height={160}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "62%",
                    left: "5%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/u.png"
                    alt="Treasure Chest"
                    width={160}
                    height={160}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "66%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/u.png"
                    alt="Treasure Chest"
                    width={180}
                    height={180}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "18%",
                    left: "45.40%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/a.png"
                    alt="Treasure Chest"
                    width={100}
                    height={100}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "51.50%",
                    left: "20%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/a.png"
                    alt="Treasure Chest"
                    width={150}
                    height={150}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "35%",
                    left: "18%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/a.png"
                    alt="Treasure Chest"
                    width={100}
                    height={100}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "38%",
                    left: "76.60%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/w.png"
                    alt="Treasure Chest"
                    width={280}
                    height={280}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "13%",
                    left: "9%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/mmm.png"
                    alt="Treasure Chest"
                    width={100}
                    height={180}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "14%",
                    left: "13.40%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/nn.png"
                    alt="Treasure Chest"
                    width={100}
                    height={100}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "38%",
                    left: "30%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/china.png"
                    alt="Treasure Chest"
                    width={150}
                    height={150}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "27%",
                    left: "87%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/htp.png"
                    alt="Treasure Chest"
                    width={80}
                    height={80}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "40.50%",
                    left: "55%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/home.png"
                    alt="Treasure Chest"
                    width={100}
                    height={100}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "69%",
                    left: "52.20%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/kt.png"
                    alt="Treasure Chest"
                    width={100}
                    height={100}
                />
            </div>

            {mapData.map((lesson) => (
                <div
                    key={lesson.id}
                    className={`absolute ${lesson.id >= 15 && lesson.id <= 18
                        ? "flex flex-col items-center justify-center text-center rounded-full shadow-md"
                        : "flex items-center bg-white border-4 rounded-full shadow-md"
                        }`}
                    style={{
                        top: `${lesson.positionY}%`,
                        left: `${lesson.positionX}%`,
                        transform: "translate(-50%, -50%)",
                        background:
                            lesson.id >= 15 && lesson.id <= 18
                                ? "linear-gradient(to bottom, #FFFF00, #FFA500)" // วงกลมสีเหลือง-ส้ม
                                : "white",
                        width:
                            lesson.id >= 15 && lesson.id <= 18
                                ? "150px" // กำหนดขนาดสำหรับ id 15-18
                                : lesson.id === 1
                                    ? "310px"
                                    : lesson.id === 2
                                        ? "250px"
                                        : lesson.id === 3
                                            ? "280px"
                                            : lesson.id === 4
                                                ? "170px"
                                                : lesson.id === 5
                                                    ? "320px"
                                                    : lesson.id === 6
                                                        ? "340px"
                                                        : lesson.id === 7
                                                            ? "290px"
                                                            : lesson.id === 8
                                                                ? "240px"
                                                                : lesson.id === 9
                                                                    ? "290px"
                                                                    : lesson.id === 10
                                                                        ? "280px"
                                                                        : lesson.id === 11
                                                                            ? "290px"
                                                                            : lesson.id === 12
                                                                                ? "220px"
                                                                                : lesson.id === 13
                                                                                    ? "290px"
                                                                                    : lesson.id === 14
                                                                                        ? "220px"
                                                                                        : "auto",
                        height:
                            lesson.id >= 15 && lesson.id <= 18
                                ? "150px" // กำหนดขนาดสำหรับ id 15-18
                                : lesson.id === 14
                                    ? "98px"
                                    : lesson.id >= 1 && lesson.id <= 13
                                        ? "59px"
                                        : "auto",
                        borderColor:
                            lesson.id >= 15 && lesson.id <= 18
                                ? "transparent" // ไม่แสดงเส้นขอบสำหรับวงกลม id 15-18
                                : lesson.id === 14
                                    ? "red"
                                    : lesson.id >= 1 && lesson.id <= 13
                                        ? "#FFFF00"
                                        : "white",
                        borderWidth:
                            lesson.id >= 15 && lesson.id <= 18
                                ? "0px" // ไม่มีเส้นขอบ
                                : lesson.id === 14 || (lesson.id >= 1 && lesson.id <= 13)
                                    ? "4px"
                                    : "",
                        borderStyle: "solid",
                    }}
                    onClick={() => handleClick(lesson.id)}
                    title={lesson.description}
                >
                    {lesson.id >= 15 && lesson.id <= 18 ? (
                        <div className="text-2xl font-bold text-center mt-[13px]">
                            {lesson.description}
                        </div>
                    ) : (
                        <>
                            <div
                                className={`flex items-center justify-center w-[65px] ${lesson.id === 14 ? "h-[90px]" : "h-[50px]"
                                    } text-4xl ${lesson.id === 14
                                        ? "p-4 bg-red-600 rounded-l-full"
                                        : "p-0 bg-yellow-300 rounded-l-full"
                                    } text-black font-black`}
                                style={{ border: "none" }}
                            >
                                {lesson.name}
                            </div>

                            <span
                                className={`text-black font-bold tracking-wider text-2xl ${lesson.id === 1
                                    ? "ml-3"
                                    : lesson.id === 2
                                        ? "ml-5"
                                        : lesson.id === 3
                                            ? "ml-4"
                                            : lesson.id === 4
                                                ? "ml-3"
                                                : lesson.id === 5
                                                    ? "ml-2"
                                                    : lesson.id === 6
                                                        ? "ml-3"
                                                        : lesson.id === 7
                                                            ? "ml-7"
                                                            : lesson.id === 8
                                                                ? "ml-7"
                                                                : lesson.id === 9
                                                                    ? "ml-7"
                                                                    : lesson.id === 10
                                                                        ? "ml-4"
                                                                        : lesson.id === 11
                                                                            ? "ml-5"
                                                                            : lesson.id === 12
                                                                                ? "ml-5"
                                                                                : lesson.id === 13
                                                                                    ? "ml-5"
                                                                                    : lesson.id === 14
                                                                                        ? "ml-4"
                                                                                        : "ml-1"
                                    }`}
                            >
                                {lesson.description}
                            </span>
                        </>
                    )}
                </div>
            ))}

            <div
                style={{
                    position: "absolute",
                    top: "68%", // ปรับตำแหน่งให้อยู่กึ่งกลาง
                    left: "50%", // ลดระยะห่างจากขอบขวา
                    transform: "translate(234%, -46%)",
                }}
            >
                <Image
                    src="/afa.png"
                    alt="Treasure Chest"
                    width={280}
                    height={280}
                    style={{
                        objectFit: "contain", // หรือใช้ "cover" เพื่อครอบคลุมพื้นที่
                    }}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "22%",
                    left: "73.40%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/1.png"
                    alt="Treasure Chest"
                    width={70}
                    height={70}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "32.40%",
                    left: "10.80%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/2.png"
                    alt="Treasure Chest"
                    width={70}
                    height={70}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "71.60%",
                    left: "42%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/3.png"
                    alt="Treasure Chest"
                    width={70}
                    height={70}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "78.70%",
                    left: "82.50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/4.png"
                    alt="Treasure Chest"
                    width={70}
                    height={70}
                />
            </div>

            {/* Start Message */}
            <div className="absolute top-[24.90%] left-[5%] transform -translate-x-1/2 -translate-y-1/2 text-black font-bold underline text-5xl">
                Start
            </div>

            {/* Finish Message */}
            <div className="absolute top-[85%] left-[95%] transform -translate-x-1/2 -translate-y-1/2 text-black font-bold underline text-5xl">
                Finish!
            </div>

            {/* Active Lesson Popup */}
            {activeLesson !== null && isLoggedIn && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] bg-white border border-gray-300 rounded-lg p-5 shadow-lg">
                    <h2 className="text-xl font-bold mb-4">
                        {`Lesson ${mapData.find((lesson) => lesson.id === activeLesson)?.name}`}
                    </h2>
                    <p className="mb-4">
                        {mapData.find((lesson) => lesson.id === activeLesson)?.description}
                    </p>
                    <button
                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                        onClick={completeLesson}
                    >
                        Complete Lesson
                    </button>
                </div>
            )}

            <div
                className="relative"
                style={{
                    width: "124.479px",
                    height: "83.8675px",
                    transform: "translate(733.01px, 591.626px) rotate(14deg)",
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
                <div className="absolute top-0 left-0 pointer-events-none" style={{ transformOrigin: "0px 0px", width: "112.685px", transform: "scale(1.10466)", }}>
                </div>
            </div>

        </div >
    );
}