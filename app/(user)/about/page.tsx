import React from "react";
import Image from "next/image";
export default function page() {
  return <div>
           <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
              <div className="flex flex-col lg:flex-row justify-between gap-8">
                  <div className="w-full lg:w-5/12 flex flex-col justify-center">
                      <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                      <p className="font-normal text-base leading-6 text-gray-600 ">Welcome to Khmer Store! We’re here to bring you the best of Cambodia. From traditional crafts to delicious local foods, we offer a wide range of authentic Khmer products. Our goal is to share the beauty of Cambodian culture with you while supporting local artisans and businesses. Whether you are looking for a special gift or something unique for your home, you’ll find it here. Thank you for choosing Khmer Store—we’re excited to bring a piece of Cambodia to you!</p>
                  </div>
                  <div className="w-full lg:w-8/12 relative h-[400px]">
                    <Image src="/about/Rectangle-116.png" alt="A group of People" fill  />
                  </div>
              </div>
  
              <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                  <div className="w-full lg:w-5/12 flex flex-col justify-center">
                      <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                      <p className="font-normal text-base leading-6 text-gray-600 ">Khmer Store was started by a team of five friends who wanted to share the beauty of Cambodia with the world. We combined our passion and skills to offer a range of authentic Khmer products, from traditional crafts to unique cultural items. We proudly support local artisans and are thrilled to bring a piece of Cambodia to you, wherever you are. Thank you for joining us on this journey—we can’t wait to share our favorite Khmer items with you!</p>
                  </div>
                  <div className="w-full lg:w-8/12 lg:pt-8">
                      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                          <div className="p-4 pb-6 flex justify-center flex-col items-center  ">
                              <div className="relative w-full md:h-48 sm:h-96 h-96">
                                <Image className="md:block" fill src={"/about/Rectangle-118-2.png"} alt="Alexa featured Img" />
                              </div>
                              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alexa</p>
                          </div>
                          <div className="p-4 pb-6 flex justify-center flex-col items-center">
                              {/* <Image className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" /> */}
                              <div className="relative w-full md:h-48 sm:h-96 h-96">
                                <Image className="md:block" fill src={"/about/Rectangle-119.png"} alt="Alexa featured Img" />
                              </div>
                              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                          </div>
                          <div className="p-4 pb-6 flex justify-center flex-col items-center">
                              {/* <Image className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" /> */}
                              <div className="relative w-full md:h-48 sm:h-96 h-96">
                                <Image className="md:block" fill src={"/about/Rectangle-120.png"} alt="Alexa featured Img" />
                              </div>
                              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                          </div>
                          <div className="p-4 pb-6 flex justify-center flex-col items-center">
                              {/* <Image className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" /> */}
                              <div className="relative w-full md:h-48 sm:h-96 h-96">
                                <Image className="md:block" fill src={"/about/Rectangle-121.png"} alt="Alexa featured Img" />
                              </div>
                              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                          </div>
                          <div className="p-4 pb-6 flex justify-center flex-col items-center">
                              {/* <Image className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" /> */}
                              <div className="relative w-full  md:h-48 sm:h-96 h-96">
                                <Image className="md:block" fill src={"/about/Rectangle-121.png"} alt="Alexa featured Img" />
                              </div>
                              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
                <div className="w-full lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Mission</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">At Khmer Store, our mission is to celebrate and share the rich heritage of Cambodia with people around the world. We are committed to offering a diverse selection of authentic Khmer products that showcase the artistry and cultural traditions of our local artisans. By connecting you with these unique crafts and items, we aim to support traditional craftsmanship and provide a window into the beauty and richness of Cambodian culture. Through our platform, we strive to build a bridge between Cambodia and the global community, fostering appreciation and connection through our carefully curated products.</p>
                </div>
                <div className="w-full lg:w-6/12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                        {/* <!-- Team Card --> */}
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                                <svg className="mr-6" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25.5 28.5C27.9853 28.5 30 26.4853 30 24C30 21.5147 27.9853 19.5 25.5 19.5C23.0147 19.5 21 21.5147 21 24C21 26.4853 23.0147 28.5 25.5 28.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5 28.5C12.9853 28.5 15 26.4853 15 24C15 21.5147 12.9853 19.5 10.5 19.5C8.01472 19.5 6 21.5147 6 24C6 26.4853 8.01472 28.5 10.5 28.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Team</p>
                                <p className="mt-2 font-normal text-base leading-6 text-gray-600">Our mission at Khmer Store is to share Cambodia’s rich culture globally by offering authentic Khmer products and supporting local artisans.</p>
                            </div>
                        </div>

                        {/* <!-- Board Card --> */}
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25.5 10.5C27.1569 10.5 28.5 9.15685 28.5 7.5C28.5 5.84315 27.1569 4.5 25.5 4.5C23.8431 4.5 22.5 5.84315 22.5 7.5C22.5 9.15685 23.8431 10.5 25.5 10.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22.5 33V27H19.5L22.5 18C22.5 17.6022 22.658 17.2206 22.9393 16.9393C23.2206 16.658 23.6022 16.5 24 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18L31.5 27H28.5V33" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Board</p>
                                <p className="mt-2 font-normal text-base leading-6 text-gray-600">At Khmer Store, we aim to share Cambodia’s culture, support local artisans, and connect people with our traditions.</p>
                            </div>
                        </div>

                        {/* <!-- Press Card --> */}
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.5 10.5L18 19.5L31.5 10.5" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Press</p>
                                <p className="mt-2 font-normal text-base leading-6 text-gray-600">If you’re interested in covering Khmer Store or need more information, please contact us at productkhmer@gmail.com . We’d be happy to assist with any press-related requests.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
           

            
            

           



     </div>;
}
