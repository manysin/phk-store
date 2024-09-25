"use client";
import { log, profile } from "console";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
interface User {
  userName: string;
  email: string;
  password: string;
  profile: string;
  gender: string;
  birthDate: string;
  confirmPassword: string;
}
const Page = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>({
    userName: "",
    email: "",
    password: "",
    profile: "user.png",
    gender: "",
    birthDate: "",
    confirmPassword: "",
  });
  const [fileProfile, setFileProfile] = useState<File | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [oldPasswordVal, setOldPasswordVal] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [imagePreview, setImagePreview] = useState("/profile/user.png");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        router.push("/login");
      }
      setOldPassword(storedUser ? JSON.parse(storedUser).password : "");
      setUser(storedUser ? JSON.parse(storedUser) : {});
      setImagePreview(
        storedUser ? `/profile/${JSON.parse(storedUser).profile}` : ""
      );
      setUser((prevUser) => ({ ...prevUser, ["password"]: "" }));
      setUser((prevUser) => ({ ...prevUser, ["confirmPassword"]: "" }));
    }
  }, []);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setFileProfile(e.target.files ? e.target.files[0] : null);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };
  const handleChangeOldPasswordVal = (e: any) =>
    setOldPasswordVal(e.target.value);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  async function submitHandler(e: any) {
    e.preventDefault();
    if (
      oldPasswordVal.length ||
      user.password.length ||
      user.confirmPassword.length
    ) {
      if (!oldPasswordVal.length) {
        alert("Please enter old password");
        return;
      }
      if (oldPassword !== oldPasswordVal) {
        alert("Your old password is incorrect");
        return;
      }
      if (!user.password.length && !user.confirmPassword.length) {
        alert("please enter password and confirm Password");
        return;
      }
      if (user.password !== user.confirmPassword) {
        alert("Password and confirm password do not match");
        return;
      }
    }

    try {
      const formData = new FormData();
      if (fileProfile) {
        formData.append("fileProfile", fileProfile);
        const response = await fetch("api/upload", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        if (data.fileName) {
          const updatedUser = {
            ...user,
            profile: data.fileName,
            password: "",
            confirmPassword: "",
          };
          localStorage.setItem("user", JSON.stringify(updatedUser));
        }
        if (
          !(
            oldPasswordVal.length ||
            user.password.length ||
            user.confirmPassword.length
          )
        ) {
          const updatedUser = {
            ...user,
            profile: data.fileName,
            password: oldPassword,
            confirmPassword: "",
          };
          localStorage.setItem("user", JSON.stringify(updatedUser));
          localStorage.setItem("users", JSON.stringify([updatedUser]));
        }
      } else {
        const updatedUser = {
          ...user,
          password: oldPassword,
          confirmPassword: "",
        };
        localStorage.setItem("user", JSON.stringify([updatedUser]));
      }
    } catch (error) {
      console.error("Upload error:", error);
    }

    window.location.reload();
  }
  return (
    <div>
      <section className="py-10 my-auto dark:bg-gray-900">
        <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            <div className="">
              <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                Profile
              </h1>
              <h2 className="text-grey text-sm mb-4 dark:text-gray-400">
                Create Profile
              </h2>
              <form method="post">
                <div
                  className={`w-full rounded-sm bg-cover bg-center bg-no-repeat items-center`}>
                  <div
                    className={`mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full  bg-cover bg-center bg-no-repeat relative`}>
                    <Image
                      src={imagePreview}
                      alt="100"
                      className="w-full rounded-full "
                      width={100}
                      height={100}></Image>
                    <div className="bg-white/90 rounded-full w-6 h-6 text-center mt-4 absolute right-0 top-0">
                      <input
                        type="file"
                        name="profile"
                        id="upload_profile"
                        hidden
                        onChange={handleImageChange}
                      />

                      <label htmlFor="upload_profile">
                        <svg
                          data-slot="icon"
                          className="w-6 h-5 text-blue-700 position-absolute"
                          fill="none"
                          stroke-width="1.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"></path>
                        </svg>
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <input
                      type="file"
                      name="profile"
                      id="upload_cover"
                      hidden
                    />

                    <div className="bg-white flex items-center gap-1 rounded-tl-md px-2 text-center font-semibold"></div>
                  </div>
                </div>
                <h2 className="text-center mt-1 font-semibold dark:text-gray-300">
                  Upload Profile
                </h2>

                {/* user name */}
                <h1 className="text-2xl font-bold text-blue-800 mt-6">
                  Change User Name
                </h1>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full  mb-4 mt-6">
                    <label htmlFor="" className="mb-2 dark:text-gray-300">
                      User Name
                    </label>
                    <input
                      name="userName"
                      value={user.userName}
                      onChange={handleChange}
                      type="text"
                      className="mt-2 p-4 w-full border-2 border-blue-800 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="User Name"
                    />
                  </div>
                </div>

                {/* email */}
                <h1 className="text-2xl font-bold text-blue-800 mt-6 mb-3">
                  Change Email
                </h1>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full  mb-4 mt-1">
                    <label htmlFor="" className="mb-2 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      className="mt-2 p-4 w-full border-2 border-blue-800 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="Email"
                    />
                  </div>
                </div>

                {/* info */}
                <h1 className="text-2xl font-bold text-blue-800 mt-6 mb-3">
                  Change Information
                </h1>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full">
                    <h3 className="dark:text-gray-300 mb-2">gender</h3>
                    <select
                      name="gender"
                      value={user.gender}
                      onChange={handleChange}
                      title="gender"
                      className="w-full border-blue-800 text-grey border-2 rounded-lg p-4 pl-2 pr-2 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800">
                      <option disabled value="">
                        Select Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className="w-full">
                    <h3 className="dark:text-gray-300 mb-2">Date Of Birth</h3>
                    <input
                      name="birthDate"
                      value={user.birthDate}
                      onChange={handleChange}
                      type="date"
                      placeholder="date"
                      className="border-blue-800 text-grey p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    />
                  </div>
                </div>
                {/* password */}
                <h1 className="text-2xl font-bold text-blue-800 mt-6 mb-3">
                  Change Password
                </h1>
                <div className="w-full ">
                  <label htmlFor="" className=" dark:text-gray-300">
                    Old Password
                  </label>
                  <input
                    name="oldPassword"
                    value={oldPasswordVal}
                    onChange={handleChangeOldPasswordVal}
                    type="password"
                    className="border-blue-800 mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full  mb-4 mt-1">
                    <label htmlFor="" className="mb-2 dark:text-gray-300">
                      Password
                    </label>
                    <input
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      type="password"
                      className="mt-2 p-4 w-full border-2 border-blue-800 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="Password"
                    />
                  </div>
                  <div className="w-full  mb-4 lg:mt-1">
                    <label htmlFor="" className=" dark:text-gray-300">
                      Confirm Password
                    </label>
                    <input
                      name="confirmPassword"
                      value={user.confirmPassword}
                      onChange={handleChange}
                      type="password"
                      className="border-blue-800 mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                  <button
                    type="submit"
                    className="w-full p-4"
                    onClick={submitHandler}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
