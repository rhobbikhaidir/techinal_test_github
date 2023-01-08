import React, { useState } from "react";
import {  useSelector } from "react-redux";
import Star from "../assets/star.png";
import { format } from "date-fns";

const UserLists = () => {
  const [repoShow, setRepoShows] = useState(false);

  const { findUser, show, repoUser } = useSelector((state) => state);

  return (
    <section>
      <div className="relative mt-10 py-5">
        <div className="mb-10 bg-white">
          {show && (
            <details
              onClick={() => setRepoShows(true)}
              className="open:ring-1 open:h-28 open:ring-black/5 p-6 rounded-lg transform-gpu delay-75 duration-100 ease-in-out"
            >
              <summary className="leading-6  open:shadow-lg border  text-slate-900 dark:text-white font-semibold select-none">
                <p className="text-black font-semibold text-xs flex justify-start items-center">
                  click me!
                </p>
                <h3 className="text-black font-semibold text-lg flex justify-center items-center">
                  {findUser?.login}
                </h3>
              </summary>
              <section className=" h-auto bg-gray-100  px-7 py-4 rounded-sm">
                {repoShow &&
                  repoUser?.map((item, i) => {
                    return (
                      <div
                        className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400"
                        key={i}
                      >
                        {/* dropdwon */}
                        <div className="w-full h-auto bg-gray-400 rounded-md px-4 py-4">
                          <div className="flex justify-between items-center">
                            <h2 className="text-lg font-medium text-left text-white">
                              {item.name}
                            </h2>
                            <div className="flex">
                              <p className="text-white text-xs mr-2">
                                {item.stargazers_count}
                              </p>
                              <img
                                src={Star}
                                alt="logo-star"
                                className="w-[16px] h-[16px] object-contain"
                              />
                            </div>
                          </div>

                          <p className="text-white mt-4 text-base text-left font-normal">
                            {item.description}
                          </p>
                          <p className="text-black mt-4 text-base text-left font-semibold">
                            {item.language}
                          </p>

                          <div className="bg-black w-[80px] h-[40px] px-1 py-1 rounded-full text-center text-white mt-2">
                            {item.visibility}
                          </div>

                          <p className="text-white mt-4 text-base text-left font-normal">
                            This repository was created on
                            <div className="text-black">
                              {format(
                                new Date(`${item.created_at}`),
                                "dd MMMM yyy"
                              )}
                            </div>
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </section>
            </details>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserLists;
