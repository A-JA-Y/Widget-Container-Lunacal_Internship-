import React, { useState } from "react";
import help from "../assets/help.png";
import holder from "../assets/holder.png";
import prev from "../assets/prev.png";
import next from "../assets/next.png";
import gallery from "../assets/gallery.png";
import { PlusOutlined } from "@ant-design/icons";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";

const WidgetContainer = () => {
  const [images, setImages] = useState([
    { src: one, alt: "imageHere" },
    { src: two, alt: "imageHere" },
    { src: three, alt: "imageHere" },
  ]);

  const addImage = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage = {
          src: event.target.result,
          alt: "imageHere",
        };
        setImages([...images, newImage]);
      };
      reader.readAsDataURL(file);
    };
    fileInput.click();
  };

  return (
    <div>
      <div className="main w-full p-10 px-20 gap-10 m-auto items-center justify-center grid lg:grid-cols-2">
        <div className="left flex items-center justify-center bg-[#363c43] rounded-xl h-full p-10">
          Left Will be empty
        </div>
        <div className="right flex flex-col gap-3  items-center justify-center  h-full ">
          <div className="firstwidget w-full text-center bg-[#363c43] flex rounded-xl p-2 justify-between">
            <div className="left flex flex-col h-full items-center justify-center">
              <div className="help cursor-pointer">
                <img src={help} className=" w-24 " alt="" />
              </div>
              <div className="drag pt-5 cursor-grabbing">
                <img src={holder} alt="" />
              </div>
            </div>
            <div className="middle flex flex-col items-center justify-center">
              <nav>
                <ul className="flex gap-1 justify-between bg-zinc-950 p-2 rounded-xl">
                  <li className="py-2 px-14 bg-zinc-800 text-white rounded-xl drop-shadow-2xl z-10 cursor-pointer">
                    About
                  </li>
                  <li className="py-2 px-8 cursor-pointer">Experience</li>
                  <li className="py-2 px-8 cursor-pointer">Recommended</li>
                </ul>
              </nav>
              <p className="text-left text-base p-3">
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now.
                <br />
                <br />I was born and raised in Albany, NY, and have been living
                in Santa Carla for the past 10 years with my wife Tiffany and my
                4-year-old twin daughters, Emma and Ella.Both of them are just
                starting school, so my calendar is usually blocked between 9-10
                AM.
              </p>
            </div>
            <div className="right h-full py-10 float-end flex items-center">
                <hr className="w-1 h-8 bg-slate-600 rounded-full border-none" />
              </div>
          </div>
          <hr className="h-1 bg-[#363c43] w-[90%] rounded-full border-none" />
          <div className="secondwidget w-full text-center bg-[#363c43] flex rounded-xl p-2 justify-between">
            <div className="left flex flex-col h-full items-center justify-center ">
              <div className="help cursor-pointer">
                <img src={help} className="w-7 " alt="" />
              </div>
              <div className="drag pt-5 cursor-grabbing">
                <img src={holder} alt="" />
              </div>
            </div>
            <div className="middle flex flex-col items-center justify-between">
              <nav>
                <ul className="flex gap-3 m-2">
                  <li>
                    <img src={gallery} alt="" />
                  </li>
                  <li>
                    <button
                      className="w-36 h-14 text-white shadow-inner shadow-[#ffffff38] drop-shadow-lg font-medium rounded-full bg-gray-700"
                      onClick={addImage}
                    >
                      <PlusOutlined /> ADD IMAGE
                    </button>
                  </li>
                  <li className="mb-2 mt-0 pt-0 -translate-y-7">
                    <div className="prev-next-btns flex justify-center ">
                      <button>
                        <img
                          src={prev}
                          className="hover:brightness-75 w-30 h-30 transition-all rounded-full "
                          alt=""
                        />
                      </button>
                      <button>
                        <img
                          src={next}
                          className="hover:brightness-75 w-30 h-30 transition-all  rounded-full pb-3"
                          alt=""
                        />
                      </button>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="imageGallery flex items-center justify-center overflow-auto ">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="imageGalleryCarouselItem mx-2"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      
                      className="rounded-xl w-40 h-40"
                    />
                  </div>
                ))}
              </div>
              
            </div>
              <div className="right h-full py-10 float-end flex items-center">
                <hr className="w-1 h-8 bg-slate-600 rounded-full border-none" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetContainer;
