import { useEffect, useState } from "react";

import Image from "next/image";

import "./style.css";

import { IoIosArrowDown } from "react-icons/io";
import { LuPlus, LuMinus } from "react-icons/lu";

// Import images
import glassOne from "@/assets/images/preorder/glass-1.webp";
import glassTwo from "@/assets/images/preorder/glass-2.webp";
import glassThree from "@/assets/images/preorder/glass-3.webp";
import glassFour from "@/assets/images/preorder/glass-4.webp";
import glassFive from "@/assets/images/preorder/glass-5.webp";

const images = [glassOne, glassTwo, glassThree, glassFour, glassFive];

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  const [quantity, setQuantity] = useState(1);
  const [isPrescription, setIsPrescription] = useState(false);

  const [leftAxis, setLeftAxis] = useState({ sph: "", cyl: "", axis: false });
  const [rightAxis, setRightAxis] = useState({ sph: "", cyl: "", axis: false });

  const sph = [
    "",
    "-6.0",
    "-5.75",
    "-5.5",
    "-5.25",
    "-5.0",
    "-4.75",
    "-4.5",
    "-4.25",
    "-4.0",
    "-3.75",
    "-3.5",
    "-3.25",
    "-3.0",
    "-2.75",
    "-2.5",
    "-2.25",
    "-2.0",
    "-1.75",
    "-1.5",
    "-1.25",
    "-1.0",
    "-0.75",
    "-0.5",
    "-0.25",
    "0.0",
    "0.25",
    "0.5",
    "0.75",
    "1.0",
    "1.25",
    "1.5",
    "1.75",
    "2.0",
    "2.25",
    "2.5",
    "2.75",
    "3.0",
  ];

  const cyl = [
    "",
    "-2.00",
    "-1.75",
    "-1.50",
    "-1.25",
    "-1.00",
    "-0.75",
    "-0.50",
    "-0.25",
    "0.00",
    "+0.25",
    "+0.50",
    "+0.75",
    "+1.00",
    "+1.25",
    "+1.50",
    "+1.75",
    "+2.00",
  ];

  const axis = [
    "",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "100",
    "101",
    "102",
    "103",
    "104",
    "105",
    "106",
    "107",
    "108",
    "109",
    "110",
    "111",
    "112",
    "113",
    "114",
    "115",
    "116",
    "117",
    "118",
    "119",
    "120",
    "121",
    "122",
    "123",
    "124",
    "125",
    "126",
    "127",
    "128",
    "129",
    "130",
    "131",
    "132",
    "133",
    "134",
    "135",
    "136",
    "137",
    "138",
    "139",
    "140",
    "141",
    "142",
    "143",
    "144",
    "145",
    "146",
    "147",
    "148",
    "149",
    "150",
    "151",
    "152",
    "153",
    "154",
    "155",
    "156",
    "157",
    "158",
    "159",
    "160",
    "161",
    "162",
    "163",
    "164",
    "165",
    "166",
    "167",
    "168",
    "169",
    "170",
    "171",
    "172",
    "173",
    "174",
    "175",
    "176",
    "177",
    "178",
    "179",
    "180",
  ];

  const pd = [
    "",
    "58",
    "59",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "70",
    "71",
    "72",
  ];

  useEffect(() => {
    console.log(leftAxis, rightAxis);
  }, [leftAxis, rightAxis]);

  return (
    <main className="pt-32 preorder text-lg font-semibold text-stone-100">
      <div className="container">
        <div className="wrapper grid md:grid-cols-5 gap-4">
          {/* left */}
          <div className="left md:col-span-3 w-full flex justify-center items-start">
            <div className="slider bg-dark md:border border-white/10 md:px-4 md:rounded-xl overflow-hidden w-screen md:max-w-[45rem] -mx-4 md:mx-0">
              {" "}
              <Swiper
                spaceBetween={5}
                pagination={{
                  clickable: true,
                }}
                autoplay={true}
                navigation={true}
                loop={true}
                modules={[Pagination, Navigation]}
                className="w-full "
              >
                {images.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    className="rounded-sm overflow-hidden"
                  >
                    <div className="img-wrap flex justify-center items-center">
                      <Image
                        src={image.src}
                        width={500}
                        height={500}
                        alt="glass-image"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* right */}
          <div className="right md:col-span-2 space-y-5">
            <div className="heading space-y-5">
              <h1 className="text-5xl font-bold">Frame</h1>
              <p>$349.00</p>
            </div>

            <div className="content">
              <p>
                Frame is designed to be worn as a pair of glasses with a suite
                of AI capabilities out of the box. Whether your daily pair of
                specs or workbench prototyping tool, Frame is ready for the
                journey.
              </p>

              <div className="selects mt-10 space-y-8">
                {/* glass select */}
                <div className="glass-select space-y-4">
                  <h2 className="text-2xl">COLOR</h2>
                  <div className="wrap relative">
                    <label
                      htmlFor="glass-select"
                      className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 right-5"
                    >
                      <IoIosArrowDown />
                    </label>
                    <select
                      id="glass-select"
                      className="appearance-none w-full bg-black border-2 border-white/30 py-2 px-5 rounded-full text-dark focus:border-white/250 focus:outline-none font-semibold"
                    >
                      <option value="Cool gray">Cool gray</option>
                      <option value="Smokey Black">Smokey Black</option>
                      <option value="H20">H20</option>
                    </select>
                  </div>
                </div>
                {/* prescription select */}
                <div className="prescription-select space-y-4">
                  <h2 className="text-2xl uppercase">prescription</h2>
                  <div className="wrap relative">
                    <label
                      htmlFor="prescription-select"
                      className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 right-5"
                    >
                      <IoIosArrowDown />
                    </label>
                    <select
                      onChange={(e) =>
                        setIsPrescription(e.target.value === "Yes")
                      }
                      id="prescription-select"
                      className="appearance-none w-full bg-black border-2 border-white/30 py-2 px-5 rounded-full text-dark focus:border-white/250 focus:outline-none font-semibold"
                    >
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                </div>

                {/* quantity */}
                <div className="quantity space-y-4 flex flex-col items-start">
                  <div className="heading">
                    <h2 className="text-2xl">QUANTITY</h2>
                  </div>

                  <div className="content flex items-center gap-2 border-2 border-white/20 py-2 px-4 rounded-full">
                    <div
                      className="minus cursor-pointer"
                      onClick={() =>
                        setQuantity(quantity > 1 ? quantity - 1 : quantity)
                      }
                    >
                      <LuMinus />
                    </div>
                    <input
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="appearance-none bg-transparent outline-none max-w-[2.5rem] text-center"
                      type="number"
                    />

                    <div
                      className="plus cursor-pointer"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <LuPlus />
                    </div>
                  </div>
                </div>

                {/* if prescription */}
                {!isPrescription && (
                  <div className="isprescribed space-y-3">
                    <p className="text-xl">
                      Select the prescription that most closely matches your
                      own:
                    </p>

                    {/* right eye */}
                    <div className="right-eye text-lg pb-2">
                      <h4 className="text-xl">Right Eye /OD</h4>
                      <div className="inputs grid grid-cols-2 sm:grid-cols-3 gap-4 w-full pt-4">
                        <div className="Sphere">
                          <span>Sphere / SPH</span>
                          <select
                            name=""
                            id=""
                            onChange={(e) =>
                              setRightAxis({
                                ...rightAxis,
                                sph: e.target.value,
                              })
                            }
                          >
                            {sph.map((value, index) => (
                              <option key={index} value={value}>
                                {value}
                              </option>
                            ))}
                          </select>
                        </div>
                        {/* Cylinder / CYL */}
                        <div className="Sphere">
                          <span>Cylinder / CYL</span>
                          <select
                            name=""
                            id=""
                            onChange={(e) =>
                              setRightAxis({
                                ...rightAxis,
                                cyl: e.target.value,
                              })
                            }
                          >
                            {cyl.map((value, index) => (
                              <option key={index} value={value}>
                                {value}
                              </option>
                            ))}
                          </select>
                        </div>
                        {/* Axis / AXS */}
                        <div className="Sphere">
                          <span>Axis / AXS</span>
                          <div
                            className={`${
                              rightAxis.sph !== "" && rightAxis.cyl !== ""
                                ? "opacity-100 before:z-[-1]"
                                : "opacity-50 relative before:absolute before:inset-0 before:h-full before:w-full before:bg-white before:z-10 rounded-full before:rounded-full"
                            }`}
                          >
                            <select name="" id="">
                              {axis.map((value, index) => (
                                <option key={index} value={value}>
                                  {value}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* left eye */}
                    <div className="left-eye text-lg border-t-[3px] pt-4 border-white/80">
                      <h4 className="text-xl">Left Eye /OD</h4>
                      <div className="inputs grid grid-cols-2 sm:grid-cols-3 gap-4 w-full pt-4">
                        <div className="Sphere">
                          <span>Sphere / SPH</span>
                          <select
                            name=""
                            id=""
                            onChange={(e) =>
                              setLeftAxis({ ...leftAxis, sph: e.target.value })
                            }
                          >
                            {sph.map((value, index) => (
                              <option key={index} value={value}>
                                {value}
                              </option>
                            ))}
                          </select>
                        </div>
                        {/* Cylinder / CYL */}
                        <div className="Sphere">
                          <span>Cylinder / CYL</span>
                          <select
                            name=""
                            id=""
                            onChange={(e) =>
                              setLeftAxis({ ...leftAxis, cyl: e.target.value })
                            }
                          >
                            {cyl.map((value, index) => (
                              <option key={index} value={value}>
                                {value}
                              </option>
                            ))}
                          </select>
                        </div>
                        {/* Axis / AXS */}
                        <div className="Sphere">
                          <span>Axis / AXS</span>
                          <div
                            className={`${
                              leftAxis.sph !== "" && leftAxis.cyl !== ""
                                ? "opacity-100 before:z-[-1]"
                                : "opacity-50 relative before:absolute before:inset-0 before:h-full before:w-full before:bg-white before:z-10 rounded-full before:rounded-full"
                            }`}
                          >
                            <select name="" id="">
                              {axis.map((value, index) => (
                                <option key={index} value={value}>
                                  {value}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pupillary  */}
                    <div className="pupillary pt-4">
                      <h4>Pupillary Distance (PD mm)</h4>

                      <select
                        name=""
                        id=""
                        onChange={(e) =>
                          setRightAxis({ ...rightAxis, sph: e.target.value })
                        }
                      >
                        {pd.map((value, index) => (
                          <option key={index} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>

                      <span className="text-base">
                        If you have have two PD values less than 0.5 apart add
                        them together and round up.
                      </span>
                    </div>
                  </div>
                )}

                <div className="bottom">
                  <div className="btn">
                    <button className="text-center text-black bg-white w-full py-2.5 px-4 rounded-full uppercase font-semibold">
                      Preorder now
                    </button>
                  </div>
                  <p className="mt-4">
                    Free shipping for preorders! First batch ships on April 15.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
