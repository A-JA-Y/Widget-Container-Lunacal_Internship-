import React from "react";
import help from "../assets/help.png";
import holder from "../assets/holder.png";
import prev from "../assets/prev.png";
import next from "../assets/next.png";
import gallery from "../assets/gallery.png";
import { PlusOutlined } from "@ant-design/icons";


const WidgetContainer = () => {
  return (
    <>
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
                <ul className="flex gap-3 justify-between">
                  <li>About</li>
                  <li>Experience</li>
                  <li>Recommended</li>
                </ul>
              </nav>
              <p className="text-left p-3">
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now.
                <br />I was born and raised in Albany, NY, and have been living
                in Santa Carla for the past 10 years with my wife Tiffany and my
                4-year-old twin daughters, Emma and Ella.Both of them are just
                starting school, so my calendar is usually blocked between 9-10
                AM.
              </p>
            </div>
            <div className="right h-full py-10">
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
                <ul className="flex gap-3">
                  <li>
                    <img src={gallery} alt="" />
                  </li>
                  <li>
                    <button className=" w-36 h-14 text-white font-medium drop-shadow-xl border-t-2 backdrop-blur-md rounded-full bg-[#40464d]">
                     <span><PlusOutlined  /></span> ADD IMAGE
                    </button>
                  </li>
                  <li>
                    <div className="prev-next-btns">
                      <button>
                        <img
                          src={prev}
                          className="hover:brightness-75 transition-all  "
                          alt=""
                        />
                      </button>
                      <button>
                        <img
                          src={next}
                          className="hover:brightness-75 transition-all  "
                          alt=""
                        />
                      </button>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="photos-container">
                <div className="photos flex gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1634056483158-0b7f8c3c6b4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI0NzN8MHwxfGFsbHwxf"
                    alt="ImgageHere"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1634056483158-0b7f8c3c6b4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI0NzN8MHwxfGFsbHwxf"
                    alt="ImgageHere"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1634056483158-0b7f8c3c6b4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI0NzN8MHwxfGFsbHwxf"
                    alt="ImgageHere"
                  />
                </div>
              </div>
            </div>
            <div className="right h-full py-10 float-end">
              <hr className="w-1 h-8 bg-slate-600 rounded-full border-none" />
            </div>
          </div>

          <hr className="h-1 bg-[#363c43] w-[90%] rounded-full border-none" />
        </div>
      </div>
    </>
  );
};

export default WidgetContainer;
