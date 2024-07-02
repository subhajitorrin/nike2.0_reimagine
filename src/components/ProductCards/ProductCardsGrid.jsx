import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./ProductCardsGrid.css";
import ProductCard from "../ProductCardShow/ProductCard";
import { useEffect, useState } from "react";
import Product from "./Product";
import { useExtractColor } from "react-extract-colors";

const airJordanXxxVii1 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929201/air-jordan-xxxviii-5_agb0xb-removebg-preview_jtalmz.png";
const airJordanXxxVii2 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929200/air-jordan-xxxviii-4_xpxbcn-removebg-preview_qnggno.png";
const airJordanXxxVii3 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929199/air-jordan-xxxviii-2_wnwntt-removebg-preview_wewxtn.png";
const airJordanXxxVii4 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929199/air-jordan-xxxviii-3_adiyil-removebg-preview_xkd4tm.png";
const airJordanXxxVii5 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929199/air-jordan-xxxviii-3_adiyil-removebg-preview_xkd4tm.png";
const airMax2701 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929202/air-max-270-4_qi3qul-removebg-preview_mvafhb.png";
const airMax2702 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929202/air-max-270-6_vvpinf-removebg-preview_nioces.png";
const airMax2703 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929202/air-max-270-4_qi3qul-removebg-preview_mvafhb.png";
const airMax2704 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929202/air-max-270-2_aoshoi-removebg-preview_qzyhll.png";
const airMax2705 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929202/air-max-270-5_mg2men-removebg-preview_koffrw.png";
const airMax2706 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929201/air-max-270-3_mhj3wu-removebg-preview_ibqr3k.png";
const airMax2707 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929202/air-max-270-4_qi3qul-removebg-preview_mvafhb.png";
const customPhantomLuna1 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929205/custom-phantom-luna-6_h3r088-removebg-preview_ibkmpl.png";
const customPhantomLuna2 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929205/custom-phantom-luna-4_iean9w-removebg-preview_ijgwwg.png";
const customPhantomLuna3 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929203/custom-phantom-luna-3_mwozhk-removebg-preview_fwjb7s.png";
const customPhantomLuna4 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929200/custom-phantom-luna-8_wnbkmt-removebg-preview_en2f9z.png";
const customPhantomLuna5 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929203/custom-phantom-luna-2_w0gk1l-removebg-preview_fomwc2.png";
const customPhantomLuna6 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929204/custom-phantom-luna-5_zby2ua-removebg-preview_aeucfg.png";
const customPhantomLuna7 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929205/custom-phantom-luna-7_wjwvfh-removebg-preview_i6qwwe.png";
const jordanStadium1 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929200/jordan-stadium-4_woywjz-removebg-preview_clc1p9.png";
const jordanStadium2 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929200/jordan-stadium-2_ubp8im-removebg-preview_kfepqt.png";
const jordanStadium3 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929201/jordan-stadium-6_z79kbd-removebg-preview_c99gdw.png";
const jordanStadium4 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929200/jordan-stadium-2_ubp8im-removebg-preview_kfepqt.png";
const jordanStadium5 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929200/jordan-stadium-1_ryeukg-removebg-preview_jzhdly.png";
const jordanStadium6 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929200/jordan-stadium-3_ezj9hj-removebg-preview_immejp.png";
const jordanStayLoyal1 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929202/jordan-stay-loyal-4_shcbsu-removebg-preview_fedltj.png";
const jordanStayLoyal2 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929202/jordan-stay-loyal-1_wctzem-removebg-preview_yz8akt.png";
const jordanStayLoyal3 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929202/jordan-stay-loyal-4_shcbsu-removebg-preview_fedltj.png";
const jordanStayLoyal4 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929203/jordan-stay-loyal-5_okasdb-removebg-preview_jrwupl.png";
const jordanStayLoyal5 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929202/jordan-stay-loyal-2_zjdgzx-removebg-preview_ed1tse.png";
const jumpmanMvp1 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929204/jumpman-mvp-2_s90knu-removebg-preview_dfqsec.png";
const jumpmanMvp2 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929203/jumpman-mvp-1_jm90hk-removebg-preview_1_xnwpva.png";
const jumpmanMvp3 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929205/jumpman-mvp-5_tp63el-removebg-preview_ldxw8p.png";
const jumpmanMvp4 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929204/jumpman-mvp-3_mfkoyc-removebg-preview_gayift.png";
const jumpmanMvp5 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929203/jumpman-mvp-1_jm90hk-removebg-preview_1_xnwpva.png";
const jumpmanMvp6 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929204/jumpman-mvp-4_zu1swz-removebg-preview_c5ggjr.png";
const lebronNxxtGen1 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929206/lebron-nxxt-gen-6_azb4el-removebg-preview_vbrdqv.png";
const lebronNxxtGen2 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929207/lebron-nxxt-gen-7_x0jrhr-removebg-preview_yivssn.png";
const lebronNxxtGen3 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929206/lebron-nxxt-gen-5_qeoovq-removebg-preview_ugm9gu.png";
const lebronNxxtGen4 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929206/lebron-nxxt-gen-4_l3zkti-removebg-preview_jxfnkt.png";
const lebronNxxtGen5 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929206/lebron-nxxt-gen-3_zrbsss-removebg-preview_xybvqj.png";
const lebronNxxtGen6 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929205/lebron-nxxt-gen-1_yzweqx-removebg-preview_tyspnz.png";
const airForce1Wild1 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929207/air-force-1-wild-3_mytpbe-removebg-preview_vaahwa.png";
const airForce1Wild2 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929207/air-force-1-wild-4_lm1ybs-removebg-preview_fkfkfa.png";
const airForce1Wild3 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929207/air-force-1-wild-3_mytpbe-removebg-preview_vaahwa.png";
const airForce1Wild4 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929207/air-force-1-wild-1_ie3elq-removebg-preview_jbnfyn.png";

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
      index:1,
      name: "AirJordan-XXXViii",
      img: airJordanXxxVii5,
    },
    {
      index:2,
      name: "Air Max 270",
      img: airMax2701,
    },
    {
      index:3,
      name: "Custom Phantom",
      img: customPhantomLuna1,
    },
    {
      index:4,
      name: "Jordan Stadium",
      img: jordanStadium1,
    },
    {
      index:5,
      name: "Jordan Stay Loyal",
      img: jordanStayLoyal1,
    },
    {
      index:6,
      name: "Air Force 1 ",
      img: airForce1Wild1,
    },
    {
      index:7,
      name: "Lebron Nxxt Gen",
      img: lebronNxxtGen1,
    },
    {
      index:8,
      name: "Jumpman Mvp",
      img: jumpmanMvp1,
    },
  ]);
  const [ShowInitial, setShowInitial] = useState([
    {
      index:1,
      firstslide: airJordanXxxVii1,
      secondslide: airJordanXxxVii2,
      thirdslide: airJordanXxxVii3,
      fourthslide: airJordanXxxVii4,
      fifthslide: airJordanXxxVii5,
    },
    {
      index:2,
      firstslide: airMax2702,
      secondslide: airMax2703,
      thirdslide: airMax2704,
      fourthslide: airMax2705,
      fifthslide: airMax2706,
    },
    {
      index:3,
      firstslide: customPhantomLuna2,
      secondslide: customPhantomLuna3,
      thirdslide: customPhantomLuna4,
      fourthslide: customPhantomLuna5,
      fifthslide: customPhantomLuna6,
    },
    {
      index:4,
      firstslide: jordanStadium2,
      secondslide: jordanStadium3,
      thirdslide: jordanStadium4,
      fourthslide: jordanStadium5,
      fifthslide: jordanStadium6,
    },
    {
      index:5,
      firstslide: jordanStayLoyal1,
      secondslide: jordanStayLoyal2,
      thirdslide: jordanStayLoyal3,
      fourthslide: jordanStayLoyal4,
      fifthslide: jordanStayLoyal5,
    },
    {
      index:6,
      firstslide: jumpmanMvp2,
      secondslide: jumpmanMvp3,
      thirdslide: jumpmanMvp4,
      fourthslide: jumpmanMvp5,
      fifthslide: jumpmanMvp6,
    },
    {
      index:7,
      firstslide: lebronNxxtGen2,
      secondslide: lebronNxxtGen3,
      thirdslide: lebronNxxtGen4,
      fourthslide: lebronNxxtGen5,
      fifthslide: lebronNxxtGen6,
    },
    {
      index:8,
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
              <div className="boom" key={i.index}>
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
              return (
                <div key={i.index}>
                  <Product name={i.name} img={i.img} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-[30vh] w-full relative z-[1] top-[0] bg-[#f4f2f0] rotate-[180deg] blur-[50px]"></div>
      </>
    );
  } else {
    return (
      <>
        <div className="bg-[#f4f2f0] mobileViewProductSection h-[80vh] relative z-[1]  px-[1rem] py-[3rem] pb-[40%] flex overflow-y-auto top-[1px] ">
          {Initial.map((item, index) => {
            const { dominantColor, darkerColor, lighterColor } =
              useExtractColor(item.img);
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundColor: `${dominantColor}`,
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
        <div className="h-[30vh] w-[130%] relative z-[1] left-[-3%] top-[-7rem] bg-[#f4f2f0] blur-[30px] "></div>
      </>
    );
  }
}

export default ProductCardsGrid;
