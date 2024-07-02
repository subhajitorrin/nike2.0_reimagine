import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./ProductCardsGrid.css";
import ProductCard from "../ProductCardShow/ProductCard";
import { useEffect, useState } from "react";
import Product from "./Product";

  const airJordanXxxVii1 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904171/air-jordan-xxxviii-1_ps5c3f.jpg";
  const airJordanXxxVii2 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904170/air-jordan-xxxviii-2_wnwntt.webp";
  const airJordanXxxVii3 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904170/air-jordan-xxxviii-3_adiyil.webp";
  const airJordanXxxVii4 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904170/air-jordan-xxxviii-4_xpxbcn.jpg";
  const airJordanXxxVii5 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904169/air-jordan-xxxviii-5_agb0xb.webp";
  const airMax2701 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904229/air-max-270-6_vvpinf.jpg";
  const airMax2702 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904225/air-max-270-7_rg752g.webp";
  const airMax2703 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904221/air-max-270-4_qi3qul.webp";
  const airMax2704 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904219/air-max-270-5_mg2men.webp";
  const airMax2705 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904218/air-max-270-1_cfhbuq.jpg";
  const airMax2706 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904209/air-max-270-2_aoshoi.webp"
  const airMax2707 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904209/air-max-270-3_mhj3wu.jpg";
  const customPhantomLuna1 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904238/custom-phantom-luna-4_iean9w.webp";
  const customPhantomLuna2 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904238/custom-phantom-luna-1_pcyw1b.webp";
  const customPhantomLuna3 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904238/custom-phantom-luna-7_wjwvfh.webp";
  const customPhantomLuna4 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904238/custom-phantom-luna-8_wnbkmt.webp";
  const customPhantomLuna5 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904235/custom-phantom-luna-3_mwozhk.webp";
  const customPhantomLuna6 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904235/custom-phantom-luna-2_w0gk1l.webp";
  const customPhantomLuna7 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904235/custom-phantom-luna-5_zby2ua.webp";
  const jordanStadium1 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904261/jordan-stadium-7_s5gws0.webp";
  const jordanStadium2 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904260/jordan-stadium-2_ubp8im.webp";
  const jordanStadium3 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904260/jordan-stadium-5_zknblb.webp";
  const jordanStadium4 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904260/jordan-stadium-6_z79kbd.webp";
  const jordanStadium5 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904260/jordan-stadium-4_woywjz.webp";
  const jordanStadium6 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904255/jordan-stadium-1_ryeukg.webp";
  const jordanStayLoyal1 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904285/jordan-stay-loyal-1_wctzem.jpg";
  const jordanStayLoyal2 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904284/jordan-stay-loyal-5_okasdb.webp";
  const jordanStayLoyal3 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904283/jordan-stay-loyal-4_shcbsu.jpg";
  const jordanStayLoyal4 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904281/jordan-stay-loyal-3_ryoh0p.jpg";
  const jordanStayLoyal5 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904280/jordan-stay-loyal-2_zjdgzx.webp";
  const jumpmanMvp1 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904315/jumpman-mvp-5_tp63el.webp";
  const jumpmanMvp2 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904313/jumpman-mvp-6_mfbvf1.webp";
  const jumpmanMvp3 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904311/jumpman-mvp-3_mfkoyc.webp";
  const jumpmanMvp4 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904311/jumpman-mvp-1_jm90hk.webp";
  const jumpmanMvp5 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904311/jumpman-mvp-4_zu1swz.webp";
  const jumpmanMvp6 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904310/jumpman-mvp-2_s90knu.webp";
  const lebronNxxtGen1 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904338/lebron-nxxt-gen-6_azb4el.jpg";
  const lebronNxxtGen2 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904337/lebron-nxxt-gen-3_zrbsss.webp";
  const lebronNxxtGen3 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904336/lebron-nxxt-gen-5_qeoovq.webp";
  const lebronNxxtGen4 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904336/lebron-nxxt-gen-7_x0jrhr.webp";
  const lebronNxxtGen5 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904332/lebron-nxxt-gen-4_l3zkti.webp";
  const lebronNxxtGen6 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904328/lebron-nxxt-gen-2_jogrv7.webp";
  const airForce1Wild1 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904352/air-force-1-wild-1_ie3elq.jpg";
  const airForce1Wild2 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904351/air-force-1-wild-4_lm1ybs.webp";
  const airForce1Wild3 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904350/air-force-1-wild-3_mytpbe.jpg";
  const airForce1Wild4 = "https://res.cloudinary.com/difxhccup/image/upload/v1719904349/air-force-1-wild-2_av4tha.jpg";


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
   
          <div className="ProductContainer" >
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
