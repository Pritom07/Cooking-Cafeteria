import { FaHome } from "react-icons/fa";
import { PiCookingPotDuotone } from "react-icons/pi";
import { CgInternal } from "react-icons/cg";
import { MdOutlineYoutubeSearchedFor } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="max-w-7xl px-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a className="text-lg text-slate-500"><FaHome />Home</a></li>
                            <li><a className="text-lg text-slate-500"><PiCookingPotDuotone />Recipes</a></li>
                            <li><a className="text-lg text-slate-500"><CgInternal />About</a></li>
                            <li><a className="text-lg text-slate-500"><MdOutlineYoutubeSearchedFor />Search</a></li>
                        </ul>
                    </div>
                    <a className="font-bold lg:text-3xl lg:text-nowrap">Recipe Calories</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-4">
                        <li><a className="text-lg text-slate-500"><FaHome />Home</a></li>
                        <li><a className="text-lg text-slate-500"><PiCookingPotDuotone />Recipes</a></li>
                        <li><a className="text-lg text-slate-500"><CgInternal />About</a></li>
                        <li><a className="text-lg text-slate-500"><MdOutlineYoutubeSearchedFor />Search</a></li>
                    </ul>
                </div>

                <div className="navbar-end flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 md:w-auto border-2 border-green-400"
                        />
                    </div>

                    <div className="dropdown dropdown-end pr-6">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;