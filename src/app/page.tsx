"use client";

import React from 'react';
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Image from 'next/image';

interface MapPoint {
  id: number;
  name: string;
  description: string;
  positionX: number; // Percentage-based position
  positionY: number; // Percentage-based position
  isCompleted: boolean;
}

export default function Page() {
  {
    const [mapData, setMapData] = useState<MapPoint[]>([]);
    const [activeLesson, setActiveLesson] = useState<number | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
      const token = localStorage.getItem("authToken");
      setIsLoggedIn(!!token);

      const initialLessons: MapPoint[] = [
        { id: 1, name: "C1", description: "Cargo Retrieval", positionX: 18.20, positionY: 24.65, isCompleted: false },
        { id: 2, name: "C2", description: "Dizzy Drill", positionX: 38.55, positionY: 28.54, isCompleted: false },
        { id: 3, name: "C3", description: "Orange Farm", positionX: 62.45, positionY: 32.90, isCompleted: false },
        { id: 4, name: "C4", description: "Train", positionX: 90.0, positionY: 50.2, isCompleted: false },
        { id: 5, name: "C5", description: "Moving Container", positionX: 65.92, positionY: 52.13, isCompleted: false },
        { id: 6, name: "C6", description: "Container Handing", positionX: 36.82, positionY: 46.33, isCompleted: false },
        { id: 7, name: "C7", description: "Keeper Ball", positionX: 13, positionY: 42.15, isCompleted: false },
        { id: 8, name: "C8", description: "Logistic", positionX: 26.54, positionY: 70.31, isCompleted: false },
        { id: 9, name: "C9", description: "Square Box", positionX: 40.50, positionY: 78.40, isCompleted: false },
        { id: 10, name: "C10", description: "Maze Runner", positionX: 56.34, positionY: 69, isCompleted: false },
        { id: 11, name: "C11", description: "Line Tracking", positionX: 80.50, positionY: 75.22, isCompleted: false },
        { id: 12, name: "", description: "Movement Certificate", positionX: 80.21, positionY: 28, isCompleted: false },
        { id: 13, name: "", description: "MoveObject Challenge Certificate", positionX: 13.21, positionY: 63.22, isCompleted: false },
        { id: 14, name: "", description: "Decision Makin Certifcate", positionX: 94.21, positionY: 75.22, isCompleted: false },
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
          backgroundImage: "url('/learning-map.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* ภาพที่เพิ่ม */}
        <div
          style={{
            position: "absolute",
            top: "57%", // Adjust position as needed
            left: "83%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/m.png"
            alt="Mountain"
            width={200}
            height={200}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "55%", // Adjust position as needed
            left: "30%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/m.png"
            alt="Mountain"
            width={200}
            height={200}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "16%",
            left: "11%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/p.png"
            alt="Flag"
            width={80}
            height={80}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "18%",
            left: "64%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/t.png"
            alt="Fish"
            width={150}
            height={150}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "24%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/y.png"
            alt="Lighthouse"
            width={100}
            height={100}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "78%",
            left: "20%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/n.png"
            alt="Treasure Chest"
            width={200}
            height={200}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/a.png"
            alt="Treasure Chest"
            width={180}
            height={180}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "42%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/a.png"
            alt="Treasure Chest"
            width={180}
            height={180}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "38%",
            left: "88.40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/a.png"
            alt="Treasure Chest"
            width={110}
            height={110}
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
            top: "88%",
            left: "49.40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/l.png"
            alt="Treasure Chest"
            width={100}
            height={100}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "16%",
            left: "28.40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/k.png"
            alt="Treasure Chest"
            width={110}
            height={110}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "92.40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/c.png"
            alt="Treasure Chest"
            width={250}
            height={250}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "5.40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/c.png"
            alt="Treasure Chest"
            width={250}
            height={250}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "94%",
            left: "35.40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/c.png"
            alt="Treasure Chest"
            width={250}
            height={250}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "94%",
            left: "64.40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/c.png"
            alt="Treasure Chest"
            width={250}
            height={250}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "90%",
            left: "84.40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/c.png"
            alt="Treasure Chest"
            width={250}
            height={250}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "65%",
            left: "8.40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/c.png"
            alt="Treasure Chest"
            width={250}
            height={250}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "22%",
            left: "76.40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/c.png"
            alt="Treasure Chest"
            width={250}
            height={250}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "42%",
            left: "25%",
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
            top: "42%",
            left: "20.40%",
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
            top: "47%",
            left: "22.40%",
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
            top: "68%",
            left: "59.40%",
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
            top: "42%",
            left: "70.40%",
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
            top: "68.30%",
            left: "80.40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/e.png"
            alt="Treasure Chest"
            width={220}
            height={220}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "20.50%",
            left: "79.70%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
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
            top: "56%",
            left: "13%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          <Image
            src="/2.png"
            alt="Treasure Chest"
            width={60}
            height={60}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "67.70%",
            left: "94%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          <Image
            src="/3.png"
            alt="Treasure Chest"
            width={60}
            height={60}
          />
        </div>

        {mapData.map((lesson) => (
          <div
            key={lesson.id}
            className={`absolute ${lesson.id >= 12 && lesson.id <= 14
              ? "flex flex-col items-center justify-center text-center rounded-full shadow-md"
              : "flex items-center bg-white border-4 rounded-full shadow-md px-4"
              }`}
            style={{
              top: `${lesson.positionY}%`,
              left: `${lesson.positionX}%`,
              transform: "translate(-50%, -50%)",
              background:
                lesson.id === 14
                  ? "linear-gradient(to bottom, #ff4500, #ff8c00)" // สีแดงส้มสำหรับ id: 14
                  : lesson.id >= 12 && lesson.id <= 14
                    ? "linear-gradient(to bottom, #ffcc00, #ff6600)" // สีไล่เฉดสำหรับ C12-C14
                    : "white", // สีพื้นหลังสีขาวสำหรับ C1-C11
              width: lesson.id >= 12 && lesson.id <= 14 ? "150px" : "auto",
              height: lesson.id >= 12 && lesson.id <= 14 ? "150px" : "auto",
              color: lesson.id >= 12 && lesson.id <= 14 ? "black" : "",
              borderColor:
                lesson.id === 11
                  ? "black" // กรอบสีดำสำหรับ C11
                  : lesson.id >= 1 && lesson.id <= 10
                    ? "#32CD32 " // กรอบสีเขียวสำหรับ C1-C10
                    : "",
            }}
            onClick={() => handleClick(lesson.id)}
            title={lesson.description}
          >
            {/* สำหรับ id 12-14 */}
            {lesson.id >= 12 && lesson.id <= 14 ? (
              <>
                <div
                  className="font-black -mt-[2px]"
                  style={{
                    color: "black",
                    fontSize: "5rem",
                    transform: "translateY(-70px)",
                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)", // เงา
                    WebkitTextStroke: "3px red", // กรอบสีรอบตัวเลข
                  }}
                >
                  {lesson.name} {/* ใช้ name แทน id */}
                </div>
                <div className="text-2xl font-bold text-center mt-[20px]"
                  style={{
                    fontSize: lesson.id === 13 ? "1.3rem" : "1.5rem", // ปรับขนาด description สำหรับ id 13
                  }}
                >
                  {lesson.description}
                </div>
              </>
            ) : (
              <>
                {/* วงกลมสำหรับรหัสบทเรียน (C1-C11) */}
                <div
                  className={`flex items-center justify-center w-[70px] h-[50px] text-3xl ${lesson.name === "C11"
                    ? "flex items-center p-4 bg-red-500 rounded-l-full"
                    : "flex items-center p-4 bg-orange-400 rounded-l-full"
                    } text-black font-black border -ml-4`}
                >
                  {lesson.name}
                </div>

                {/* เส้นคั่นกลาง */}
                <div
                  className={`h-[50px] w-[4px] ${lesson.name === "C11" ? "bg-black" : "bg-green-500"
                    } mx-0`}
                ></div>

                {/* ข้อความด้านข้าง */}
                <span className="text-black font-bold tracking-wider ml-3 text-2xl">
                  {lesson.description}
                </span>
              </>
            )}
          </div>
        ))}

        {/* ข้อความ Start */}
        <div className="absolute top-[24.90%] left-[5%] transform -translate-x-1/2 -translate-y-1/2 text-black font-bold underline text-5xl ">
          Start
        </div>

        {/* ข้อความ Finish */}
        <div className="absolute top-[85%] left-[95%] transform -translate-x-1/2 -translate-y-1/2 text-black font-bold underline text-5xl ">
          Finish!
        </div>

        {activeLesson !== null && isLoggedIn && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] bg-white border border-gray-300 rounded-lg p-5 shadow-lg">
            <h2 className="text-xl font-bold mb-4">{`Lesson ${mapData.find((lesson) => lesson.id === activeLesson)?.name}`}</h2>
            <p className="mb-4">{mapData.find((lesson) => lesson.id === activeLesson)?.description}</p>
            <button
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
              onClick={completeLesson}
            >
              Complete Lesson
            </button>
          </div>
        )}
        {/* 1 */}
        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute", // หรือ relative/fixed
            top: "25%",           // จัดตำแหน่งด้านบน
            left: "28%",          // จัดตำแหน่งด้านซ้าย
            transform: "translate(-50%, -50%)", // จัดให้อยู่กึ่งกลาง
          }}
        >
          {/* เส้นประแบบโค้ง*/}
          <path
            d="M 55 60 Q 100 0, 190 80"  //กำหนดเส้นโค้ง 
            stroke="black"                //สีของเส้น
            fill="none"                   //ไม่มีสีพื้นหลัง
            stroke-width="3"              //ความหนาของเส้น
            stroke-dasharray="10,4"       //รูปแบบเส้นประ (10px เส้น, 5px ช่องว่าง)
          />
        </svg>
        {/* 2 */}
        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute", // หรือ relative/fixed
            top: "30%",           // จัดตำแหน่งด้านบน
            left: "50%",          // จัดตำแหน่งด้านซ้าย
            transform: "translate(-50%, -50%)", // จัดให้อยู่กึ่งกลาง
          }}
        >
          {/* เส้นประแบบโค้ง*/}
          <path
            d="M 0 30 Q 100 30, 200 70"  //กำหนดเส้นโค้ง 
            stroke="black"                //สีของเส้น
            fill="none"                   //ไม่มีสีพื้นหลัง
            stroke-width="3"              //ความหนาของเส้น
            stroke-dasharray="10,4"       //รูปแบบเส้นประ (10px เส้น, 5px ช่องว่าง)
          />
        </svg>
        {/* 3 */}
        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute", // หรือ relative/fixed
            top: "35%",           // จัดตำแหน่งด้านบน
            left: "74.50%",          // จัดตำแหน่งด้านซ้าย
            transform: "translate(-50%, -50%)", // จัดให้อยู่กึ่งกลาง
          }}
        >
          {/* เส้นประแบบโค้ง*/}
          <path
            d="M 0 30 Q 100 50, 157 30"  //กำหนดเส้นโค้ง 
            stroke="black"                //สีของเส้น
            fill="none"                   //ไม่มีสีพื้นหลัง
            stroke-width="3"              //ความหนาของเส้น
            stroke-dasharray="10,4"       //รูปแบบเส้นประ (10px เส้น, 5px ช่องว่าง)
          />
        </svg>
        {/* 4 */}
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "38.20%",
            left: "87.30%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <path
            d="M 20 40 Q 80 30, 170 200"
            stroke="black"
            fill="none"
            strokeWidth="3"
            strokeDasharray="10,4"
          />
        </svg>
        {/* 5 */}
        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute", // หรือ relative/fixed
            top: "55%",           // จัดตำแหน่งด้านบน
            left: "80.10%",          // จัดตำแหน่งด้านซ้าย
            transform: "translate(-50%, -50%)", // จัดให้อยู่กึ่งกลาง
          }}
        >
          {/* เส้นประแบบโค้ง*/}
          <path
            d="M 0 20 Q 150 20, 200 0"  //กำหนดเส้นโค้ง 
            stroke="black"                //สีของเส้น
            fill="none"                   //ไม่มีสีพื้นหลัง
            stroke-width="3"              //ความหนาของเส้น
            stroke-dasharray="10,4"       //รูปแบบเส้นประ (10px เส้น, 5px ช่องว่าง)
          />
        </svg>
        {/* 6 */}
        <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "54%",
            left: "56%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* เส้นประแบบโค้งที่ยาวขึ้น */}
          <path
            d="M 0 0 Q 0 0, 230 100" // เปลี่ยนพิกัด x จาก 200 เป็น 400
            stroke="black"
            fill="none"
            strokeWidth="3"
            strokeDasharray="10,4"
          />
        </svg>
        {/* 7 */}
        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute", // หรือ relative/fixed
            top: "44%",           // จัดตำแหน่งด้านบน
            left: "23.30%",          // จัดตำแหน่งด้านซ้าย
            transform: "translate(-50%, -50%)", // จัดให้อยู่กึ่งกลาง
          }}
        >
          {/* เส้นประแบบโค้ง*/}
          <path
            d="M 20 20 Q 100 30, 190 80"  //กำหนดเส้นโค้ง 
            stroke="black"                //สีของเส้น
            fill="none"                   //ไม่มีสีพื้นหลัง
            stroke-width="3"              //ความหนาของเส้น
            stroke-dasharray="10,4"       //รูปแบบเส้นประ (10px เส้น, 5px ช่องว่าง)
          />
        </svg>
        {/* 8 */}
        <svg width="10" height="200" xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "54%",
            left: "15%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* เส้นประแนวตั้ง */}
          <path
            d="M 0 0 L 0 130" // เปลี่ยนจากเส้นโค้งเป็นเส้นตรงแนวตั้ง
            stroke="black"
            fill="none"
            strokeWidth="6"
            strokeDasharray="10,4"
          />
        </svg>
        {/* 9 */}
        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute", // หรือ relative/fixed
            top: "72%",           // จัดตำแหน่งด้านบน
            left: "21.40%",          // จัดตำแหน่งด้านซ้าย
            transform: "translate(-50%, -50%)", // จัดให้อยู่กึ่งกลาง
          }}
        >
          {/* เส้นประแบบโค้ง*/}
          <path
            d="M 0 0 Q 10 10, 110 10"  //กำหนดเส้นโค้ง 
            stroke="black"                //สีของเส้น
            fill="none"                   //ไม่มีสีพื้นหลัง
            stroke-width="3"              //ความหนาของเส้น
            stroke-dasharray="10,4"       //รูปแบบเส้นประ (10px เส้น, 5px ช่องว่าง)
          />
        </svg>
        {/* 10 */}
        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute", // หรือ relative/fixed
            top: "73.50%",           // จัดตำแหน่งด้านบน
            left: "37%",          // จัดตำแหน่งด้านซ้าย
            transform: "translate(-50%, -50%)", // จัดให้อยู่กึ่งกลาง
          }}
        >
          {/* เส้นประแบบโค้ง*/}
          <path
            d="M 0 10 Q 0 10, 50 100"  //กำหนดเส้นโค้ง 
            stroke="black"                //สีของเส้น
            fill="none"                   //ไม่มีสีพื้นหลัง
            stroke-width="3"              //ความหนาของเส้น
            stroke-dasharray="10,4"       //รูปแบบเส้นประ (10px เส้น, 5px ช่องว่าง)
          />
        </svg>
        {/* 11 */}
        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute", // หรือ relative/fixed
            top: "71.50%",           // จัดตำแหน่งด้านบน
            left: "51%",          // จัดตำแหน่งด้านซ้าย
            transform: "translate(-50%, -50%)", // จัดให้อยู่กึ่งกลาง
          }}
        >
          {/* เส้นประแบบโค้ง*/}
          <path
            d="M 70 10 Q 0 0, 0 200"  //กำหนดเส้นโค้ง 
            stroke="black"                //สีของเส้น
            fill="none"                   //ไม่มีสีพื้นหลัง
            stroke-width="3"              //ความหนาของเส้น
            stroke-dasharray="10,4"       //รูปแบบเส้นประ (10px เส้น, 5px ช่องว่าง)
          />
        </svg>
        {/* 12 */}
        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute", // หรือ relative/fixed
            top: "71.50%",           // จัดตำแหน่งด้านบน
            left: "68.70%",          // จัดตำแหน่งด้านซ้าย
            transform: "translate(-50%, -50%)", // จัดให้อยู่กึ่งกลาง
          }}
        >
          {/* เส้นประแบบโค้ง*/}
          <path
            d="M 0 10 Q 0 10, 190 100"  //กำหนดเส้นโค้ง 
            stroke="black"                //สีของเส้น
            fill="none"                   //ไม่มีสีพื้นหลัง
            stroke-width="3"              //ความหนาของเส้น
            stroke-dasharray="10,4"       //รูปแบบเส้นประ (10px เส้น, 5px ช่องว่าง)
          />
        </svg>
        {/* 13 */}
        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute", // หรือ relative/fixed
            top: "78.50%",           // จัดตำแหน่งด้านบน
            left: "92.90%",          // จัดตำแหน่งด้านซ้าย
            transform: "translate(-50%, -50%)", // จัดให้อยู่กึ่งกลาง
          }}
        >
          {/* เส้นประแบบโค้ง*/}
          <path
            d="M 0 10 Q 0 36, 50 0"  //กำหนดเส้นโค้ง 
            stroke="black"                //สีของเส้น
            fill="none"                   //ไม่มีสีพื้นหลัง
            stroke-width="3"              //ความหนาของเส้น
            stroke-dasharray="10,4"       //รูปแบบเส้นประ (10px เส้น, 5px ช่องว่าง)
          />
        </svg>

      </div>
    );
  }
}
