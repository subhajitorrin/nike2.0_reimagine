import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./ProductCardsGrid.css";
import ProductCard from "../ProductCardShow/ProductCard";
import { useEffect, useState } from "react";
import Product from "./Product";
import {
  airJordanXxxVii1,
  airJordanXxxVii2,
  airJordanXxxVii3,
  airJordanXxxVii4,
  airJordanXxxVii5,
  airMax2701,
  airMax2702,
  airMax2703,
  airMax2704,
  airMax2705,
  airMax2706,
  airMax2707,
  customPhantomLuna1,
  customPhantomLuna2,
  customPhantomLuna3,
  customPhantomLuna4,
  customPhantomLuna5,
  customPhantomLuna6,
  customPhantomLuna7,
  jordanStadium1,
  jordanStadium2,
  jordanStadium3,
  jordanStadium4,
  jordanStadium5,
  jordanStadium6,
  jordanStayLoyal1,
  jordanStayLoyal2,
  jordanStayLoyal3,
  jordanStayLoyal4,
  jordanStayLoyal5,
  jumpmanMvp1,
  jumpmanMvp2,
  jumpmanMvp3,
  jumpmanMvp4,
  jumpmanMvp5,
  jumpmanMvp6,
  lebronNxxtGen1,
  lebronNxxtGen2,
  lebronNxxtGen3,
  lebronNxxtGen4,
  lebronNxxtGen5,
  lebronNxxtGen6,
  airForce1Wild1,
  airForce1Wild2,
  airForce1Wild3,
  airForce1Wild4,
} from "../../../public/Shoes";

function ProductCardsGrid() {
  const [innerWidth, setinnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setinnerWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [Initial, setInitial] = useState([
    {
      name: "AirJordan",
      img: airJordanXxxVii5,
    },
    {
      name: "AirForce",
      img: airMax2701,
    },
    {
      name: "Dunk",
      img: customPhantomLuna1,
    },
    {
      name: "Blazer",
      img: jordanStadium1,
    },
    {
      name: "AirJordan",
      img: jordanStayLoyal1,
    },
    {
      name: "AirJordan",
      img: airForce1Wild1,
    },
    {
      name: "AirJordan",
      img: lebronNxxtGen1,
    },
    {
      name: "AirJordan",
      img: jumpmanMvp1,
    },
  ]);
  const [ShowInitial, setShowInitial] = useState([
    {
      firstslide: airJordanXxxVii1,
      secondslide: airJordanXxxVii2,
      thirdslide: airJordanXxxVii3,
      fourthslide: airJordanXxxVii4,
      fifthslide: airJordanXxxVii5,
    },
    {
      firstslide: airMax2702,
      secondslide: airMax2703,
      thirdslide: airMax2704,
      fourthslide: airMax2705,
      fifthslide: airMax2706,
    },
    {
      firstslide: customPhantomLuna2,
      secondslide: customPhantomLuna3,
      thirdslide: customPhantomLuna4,
      fourthslide: customPhantomLuna5,
      fifthslide: customPhantomLuna6,
    },
    {
      firstslide: jordanStadium2,
      secondslide: jordanStadium3,
      thirdslide: jordanStadium4,
      fourthslide: jordanStadium5,
      fifthslide: jordanStadium6,
    },
    {
      firstslide: jordanStayLoyal1,
      secondslide: jordanStayLoyal2,
      thirdslide: jordanStayLoyal3,
      fourthslide: jordanStayLoyal4,
      fifthslide: jordanStayLoyal5,
    },
    {
      firstslide: jumpmanMvp2,
      secondslide: jumpmanMvp3,
      thirdslide: jumpmanMvp4,
      fourthslide: jumpmanMvp5,
      fifthslide: jumpmanMvp6,
    },
    {
      firstslide: lebronNxxtGen2,
      secondslide: lebronNxxtGen3,
      thirdslide: lebronNxxtGen4,
      fourthslide: lebronNxxtGen5,
      fifthslide: lebronNxxtGen6,
    },
    {
      firstslide: airForce1Wild1,
      secondslide: airForce1Wild2,
      thirdslide: airForce1Wild3,
      fourthslide: airForce1Wild4,
      fifthslide: airMax2707,
    },
  ]);
  useEffect(() => {
    // const Product = document.querySelectorAll('.product')
    // const Target = document.querySelector('.produced')

    // const closebtn = document.querySelector('.closebtn')
    // Product.forEach((item,index) => {
    //   if(index%2===0){
    //     item.addEventListener('click',()=>{
    //         Target.style.opacity=1;
    //         Target.classList.remove("pointerevent");
    //         closebtn.style.opacity=1;
    //         console.log("hey");
    //     })
    //     }
    // });

    const TargetProductCardSwipe = document.querySelectorAll(".boom");
    const Product = document.querySelectorAll(".product");
    const Target = document.querySelector(".produced");

    const closebtn = document.querySelector(".closebtn");
    closebtn.style.pointerEvents = "none";
    Product.forEach((item, index) => {
      item.addEventListener("click", () => {
        Target.style.opacity = 1;
        Target.classList.remove("pointerevent");
        closebtn.style.opacity = 1;
        // console.log("hey");
        // console.log(Product);
        // console.log(TargetProductCardSwipe);
        // console.log(index);
        TargetProductCardSwipe[index].style.opacity = 1;
        TargetProductCardSwipe[index].style.pointerEvents = "auto";

        //***orrin****//
        const navMenu = document.querySelector(".menuicon");
        navMenu.style.transition = "none";
        navMenu.style.opacity = 0;
        closebtn.style.pointerEvents = "auto";
        //*******//

        closebtn.addEventListener("click", () => {
          Target.style.opacity = 0;
          Target.classList.add("pointerevent");
          closebtn.style.opacity = 0;
          TargetProductCardSwipe[index].style.pointerEvents = "none";
          TargetProductCardSwipe[index].style.opacity = 0;

          //***orrin****//
          navMenu.style.opacity = 1;
          closebtn.style.pointerEvents = "none";
          //*******//
        });
      });
    });

    return () => {};
  }, []);

  if (innerWidth > 1000) {
    return (
      <>
        <div className="closebtn bg-transparent">
          <RxCross2 className="text-[2rem]" />
        </div>
        <div className="produced pointerevent">
          {ShowInitial.map((i) => {
            // console.log(i);
            return (
              <div className="boom">
                <ProductCard
                  firstslide={i.firstslide}
                  secondslide={i.secondslide}
                  thirdslide={i.thirdslide}
                  fourthslide={i.fourthslide}
                  fifthslide={i.fifthslide}
                />
              </div>
            );
          })}
        </div>
        <div className="ContainerX">
          <div className="ProductContainer">
            {Initial.map((i) => {
              return <Product name={i.name} img={i.img} />;
            })}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="bg-[#f4f2f0] mobileViewProductSection h-[60vh] relative z-[1]  px-[1rem] py-[3rem] flex overflow-y-auto top-[1px] ">
        {Initial.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.img})`,
                boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.2)",
              }}
              className="flex flex-col items-center justify-end gap-[1rem] pb-[2rem] mobileProductionSectionCards overflow-hidden h-full min-w-[80vw] mx-[2rem] rounded-tr-[20px] rounded-bl-[20px]"
            >
              <span className=" text-white text-[1.5rem] tektur">
                {item.name}
              </span>
              <div className="rounded-[20px] px-[1rem] py-[.2rem] bg-white text-black">
                See more
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductCardsGrid;
