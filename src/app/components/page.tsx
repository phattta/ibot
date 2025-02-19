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
            { id: 1, name: "1", description: "Inter Spike Essential", positionX: 17, positionY: 21, isCompleted: false },
            { id: 2, name: "2", description: "Motor", positionX: 37.90, positionY: 26, isCompleted: false },
            { id: 3, name: "3", description: "Walt Block", positionX: 59, positionY: 30, isCompleted: false },
            { id: 4, name: "4", description: "Movement Block", positionX: 85, positionY: 32, isCompleted: false },
            { id: 5, name: "5", description: "Sound Block", positionX: 80, positionY: 46, isCompleted: false },
            { id: 6, name: "6", description: "Light Block", positionX: 57.50, positionY: 48, isCompleted: false },
            { id: 7, name: "7", description: "Display Block", positionX: 35, positionY: 42, isCompleted: false },
            { id: 8, name: "8", description: "Color Sensor", positionX: 13, positionY: 38, isCompleted: false },
            { id: 9, name: "9", description: "Tilt Sensor Block", positionX: 14, positionY: 58, isCompleted: false },
            { id: 10, name: "10", description: "Repeat Loop", positionX: 22, positionY: 74, isCompleted: false },
            { id: 11, name: "11", description: "Forever Loop", positionX: 38, positionY: 64, isCompleted: false },
            { id: 12, name: "12", description: "Bar Graph Block", positionX: 52, positionY: 76, isCompleted: false },
            { id: 13, name: "13", description: "Received-Send Message Block", positionX: 75.60, positionY: 75.22, isCompleted: false },
            { id: 14, name: "", description: "Robot Building Basic Certificate", positionX: 94.21, positionY: 75.22, isCompleted: false },
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
                backgroundImage: "url('/bdafe43f-d518-4e0c-a2df-0d74f74cbe68.png')",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* ภาพที่เพิ่ม */}
            <div
                style={{
                    position: "absolute",
                    top: "55%", // Adjust position as needed
                    left: "80%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/m.png"
                    alt="Mountain"
                    width={160}
                    height={160}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "56%", // Adjust position as needed
                    left: "33%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/m.png"
                    alt="Mountain"
                    width={260}
                    height={260}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "60%",
                    left: "56%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/a.png"
                    alt="Treasure Chest"
                    width={140}
                    height={140}
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
                    left: "92%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/u.png"
                    alt="Treasure Chest"
                    width={250}
                    height={250}
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
                    top: "87%",
                    left: "84.40%",
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
                    top: "65%",
                    left: "75.40%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/q.png"
                    alt="Treasure Chest"
                    width={300}
                    height={300}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "13.40%",
                    left: "14%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/ab.png"
                    alt="Treasure Chest"
                    width={150}
                    height={150}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "10.40%",
                    left: "8%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/oi.png"
                    alt="Treasure Chest"
                    width={70}
                    height={70}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "20.90%",
                    left: "49.50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/mn.png"
                    alt="Treasure Chest"
                    width={110}
                    height={110}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "41.30%",
                    left: "53.50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/cd.png"
                    alt="Treasure Chest"
                    width={110}
                    height={110}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "55.30%",
                    left: "26.50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/gh.png"
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
                    top: "20%",
                    left: "90%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/ch.png"
                    alt="Treasure Chest"
                    width={150}
                    height={150}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "57%",
                    left: "86%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/pg.png"
                    alt="Treasure Chest"
                    width={60}
                    height={60}
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
                    top: "69%",
                    left: "54.80%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image
                    src="/kk.png"
                    alt="Treasure Chest"
                    width={90}
                    height={90}
                />
            </div>
            {/* 1 */}
            <div
                style={{
                    position: "absolute",
                    top: "24%",
                    left: "28%",
                    transform: "translate(-50%, -50%) rotate(40deg)",
                    animation: "spin 2s linear infinite",
                }}
            >
                <Image
                    src="/428ab916-b798-41a4-98c9-40fdf8842943.png"
                    alt="Map"
                    width={200}
                    height={200}
                />
            </div>
            {/* 2 */}
            <div
                style={{
                    position: "absolute",
                    top: "28.60%",
                    left: "48%",
                    transform: "translate(-50%, -50%) rotate(40deg)",
                    animation: "spin 2s linear infinite",
                }}
            >
                <Image
                    src="/428ab916-b798-41a4-98c9-40fdf8842943.png"
                    alt="Map"
                    width={200}
                    height={200}
                />
            </div>
            {/* 3 */}
            <div
                style={{
                    position: "absolute",
                    top: "31%",
                    left: "70.60%",
                    transform: "translate(-50%, -50%) rotate(27deg)",
                    animation: "spin 2s linear infinite",
                }}
            >
                <Image
                    src="/428ab916-b798-41a4-98c9-40fdf8842943.png"
                    alt="Map"
                    width={200}
                    height={200}
                    style={{
                        clipPath: "inset(30px 10px 0px 0px)", // ใช้ตัดขอบในภาพ
                    }}
                />
            </div>
            {/* 4 */}
            <div
                style={{
                    position: "absolute",
                    top: "41%",
                    left: "84%",
                    transform: "translate(-50%, -50%) rotate(-10deg)",
                    animation: "spin 2s linear infinite",
                }}
            >
                <Image
                    src="/428ab916-b798-41a4-98c9-40fdf8842943.png"
                    alt="Map"
                    width={200}
                    height={200}
                />
            </div>
            {/* 5 */}
            <div
                style={{
                    position: "absolute",
                    top: "47.80%",
                    left: "69%",
                    transform: "translate(-50%, -50%) rotate(40deg)",
                    animation: "spin 2s linear infinite",
                }}
            >
                <Image
                    src="/428ab916-b798-41a4-98c9-40fdf8842943.png"
                    alt="Map"
                    width={200}
                    height={200}
                    style={{
                        clipPath: "inset(0px 0px 0px 0px)", // ใช้ตัดขอบในภาพ
                    }}
                />
            </div>
            {/* 6 */}
            <div
                style={{
                    position: "absolute",
                    top: "46%",
                    left: "47%",
                    transform: "translate(-50%, -50%) rotate(60deg)",
                    animation: "spin 2s linear infinite",
                }}
            >
                <Image
                    src="/428ab916-b798-41a4-98c9-40fdf8842943.png"
                    alt="Map"
                    width={200}
                    height={200}
                />
            </div>
            {/* 7 */}
            <div
                style={{
                    position: "absolute",
                    top: "43.80%",
                    left: "24%",
                    transform: "translate(-50%, -50%) rotate(-13deg) scale(1, -1)",
                    animation: "spin 2s linear infinite",
                }}
            >
                <Image
                    src="/428ab916-b798-41a4-98c9-40fdf8842943.png"
                    alt="Map"
                    width={200}
                    height={200}
                    style={{
                        clipPath: "inset(0px 20px 0px 0px)", // ใช้ตัดขอบในภาพ
                    }}
                />
            </div>
            {/* 8 */}
            <div
                style={{
                    position: "absolute",
                    top: "48.50%",
                    left: "9%",
                    transform: "translate(-50%, -50%) rotate(105deg)",
                    animation: "spin 2s linear infinite",
                }}
            >
                <Image
                    src="/428ab916-b798-41a4-98c9-40fdf8842943.png"
                    alt="Map"
                    width={200}
                    height={200}
                    style={{
                        clipPath: "inset(0px 0px 30px 0px)", // ใช้ตัดขอบในภาพ
                    }}
                />
            </div>
            {/* 9 */}
            <div
                style={{
                    position: "absolute",
                    top: "66.60%",
                    left: "18%",
                    transform: "translate(-50%, -50%) rotate(-182deg) scale(1, -1)",
                    animation: "spin 2s linear infinite",
                }}
            >
                <Image
                    src="/428ab916-b798-41a4-98c9-40fdf8842943.png"
                    alt="Map"
                    width={200}
                    height={200}
                    style={{
                        clipPath: "inset(0px 0px 0px 0px)", // ใช้ตัดขอบในภาพ
                    }}
                />
            </div>
            {/* 10 */}
            <div
                style={{
                    position: "absolute",
                    top: "73.60%",
                    left: "32%",
                    transform: "translate(-50%, -50%) rotate(175deg)",
                    animation: "spin 2s linear infinite",
                }}
            >
                <Image
                    src="/428ab916-b798-41a4-98c9-40fdf8842943.png"
                    alt="Map"
                    width={200}
                    height={200}
                    style={{
                        clipPath: "inset(40px 0px 0px 0px)", // ใช้ตัดขอบในภาพ
                    }}
                />
            </div>
            {/* 11 */}
            <div
                style={{
                    position: "absolute",
                    top: "74%",
                    left: "46%",
                    transform: "translate(-50%, -50%) rotate(10deg) scale(1, -1)",
                    animation: "spin 2s linear infinite",
                }}
            >
                <Image
                    src="/428ab916-b798-41a4-98c9-40fdf8842943.png"
                    alt="Map"
                    width={200}
                    height={200}
                    style={{
                        clipPath: "inset(50px 0px 0px 0px)", // ใช้ตัดขอบในภาพ
                    }}
                />
            </div>
            {/* 12 */}
            <div
                style={{
                    position: "absolute",
                    top: "75.90%",
                    left: "64%",
                    transform: "translate(-50%, -50%) rotate(30deg)",
                    animation: "spin 2s linear infinite",
                }}
            >
                <Image
                    src="/428ab916-b798-41a4-98c9-40fdf8842943.png"
                    alt="Map"
                    width={200}
                    height={200}
                />

            </div>
            {/* 13 */}
            <div
                style={{
                    position: "absolute",
                    top: "78%",
                    left: "86%",
                    transform: "translate(-50%, -50%) rotate(20deg)",
                    animation: "spin 2s linear infinite",
                }}
            >
                <Image
                    src="/428ab916-b798-41a4-98c9-40fdf8842943.png"
                    alt="Map"
                    width={200}
                    height={200}
                    style={{
                        clipPath: "inset(0px 0px 0px 30px)", // ใช้ตัดขอบในภาพ
                    }}
                />
            </div>

            {mapData.map((lesson) => (
                <div
                    key={lesson.id}
                    className={`absolute ${lesson.id === 14
                        ? "flex flex-col items-center justify-center text-center rounded-full shadow-md"
                        : "flex items-center bg-white border-4 rounded-full shadow-md"
                        }`}
                    style={{
                        top: `${lesson.positionY}%`,
                        left: `${lesson.positionX}%`,
                        transform: "translate(-50%, -50%)",
                        background:
                            lesson.id === 14
                                ? "linear-gradient(to bottom, #4bc0c8, #feac5e)"
                                : "white",
                        width: lesson.id === 14
                            ? "155px"
                            : lesson.id === 13
                                ? "265px"
                                : lesson.id === 2
                                    ? "200px"
                                    : lesson.id === 3
                                        ? "250px"
                                        : lesson.id === 5
                                            ? "260px"
                                            : lesson.id === 6
                                                ? "280px"
                                                : lesson.id === 7
                                                    ? "270px"
                                                    : lesson.id === 8
                                                        ? "260px"
                                                        : lesson.id === 9
                                                            ? "290px"
                                                            : lesson.id === 10
                                                                ? "260px"
                                                                : lesson.id === 11
                                                                    ? "280px"
                                                                    : lesson.id === 12
                                                                        ? "280px"
                                                                        : lesson.id === 1
                                                                            ? "330px"
                                                                            : "auto",
                        height: lesson.id === 14
                            ? "150px"
                            : lesson.id === 13
                                ? "100px"
                                : lesson.id >= 1 && lesson.id <= 12
                                    ? "60px"
                                    : "auto",
                        borderColor:
                            lesson.id === 13
                                ? "red"
                                : lesson.id >= 1 && lesson.id <= 12
                                    ? "#32CD32"
                                    : "white",
                        borderWidth:
                            lesson.id === 13 || lesson.id >= 1 && lesson.id <= 12 ? "4px" : "",
                        borderStyle: "solid",
                    }}
                    onClick={() => handleClick(lesson.id)}
                    title={lesson.description}
                >
                    {lesson.id === 14 ? (
                        <div className="text-2xl font-bold text-center -mt-[15px]">
                            {lesson.description}
                        </div>
                    ) : (
                        <>
                            <div
                                className={`flex items-center justify-center w-[55px] ${lesson.id === 13 ? "h-[90px]" : "h-[50px]"
                                    } text-4xl ${lesson.id === 13
                                        ? "p-4 bg-red-600 rounded-l-full"
                                        : "p-0 bg-green-500 rounded-l-full"
                                    } text-black font-black`}
                                style={{ border: "none" }}
                            >
                                {lesson.name}
                            </div>

                            <span
                                className={`text-black font-bold tracking-wider text-2xl ${lesson.id === 2
                                    ? "ml-6"
                                    : lesson.id === 3
                                        ? "ml-6"
                                        : lesson.id === 5
                                            ? "ml-5"
                                            : lesson.id === 6
                                                ? "ml-8"
                                                : lesson.id === 7 || lesson.id === 8 || lesson.id === 10
                                                    ? "ml-4"
                                                    : lesson.id === 11
                                                        ? "ml-5"
                                                        : "ml-1"
                                    }`}
                            >
                                {lesson.description}
                            </span>
                        </>
                    )}
                </div>
            ))}

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

        </div >
    );
}