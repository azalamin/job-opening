import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const Header = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://refertest.pythonanywhere.com/user/data")
      .then((res) => res.json())
      .then((data) => {
        setUser(data?.data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <header className="bg-primary">
      <div className="navbar  px-6 md:px-12">
        <div className="flex-1">
          <span className="btn btn-ghost text-white normal-case text-xl">
            daisyUI
          </span>
        </div>
        <div className="flex-none gap-2">
          <div>
            <h3 className="text-2xl text-white">{user?.name}</h3>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.pictureUrl} alt="" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <div className="collapse hover:bg-base-300 rounded-xl">
                <input type="checkbox" className="peer" />
                <div className="collapse-title flex items-center">
                  <p className="">College </p>
                  <p className="">
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>{" "}
                  </p>
                </div>
                <div className="collapse-content">
                  <p className="text-primary">{user?.college}</p>
                </div>
              </div>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
