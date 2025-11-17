import React from "react";
import Logo from "../../Components/Logo";
import { Link, NavLink } from "react-router";
import { motion } from "framer-motion";

const AnimatedNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "relative font-bold text-secondary-content rounded-4xl bg-primary px-4 py-1"
          : "relative hover:rounded-4xl font-medium px-4 py-1"
      }
    >
      {({ isActive }) => (
        <span className="relative inline-block">
          {children}

          {isActive && (
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute inset-0 rounded-4xl"
            />
          )}
        </span>
      )}
    </NavLink>
  );
};

const Navbar = () => {
  const links = (
    <>
      <li>
        <AnimatedNavLink to="/">Services</AnimatedNavLink>
      </li>

      <li>
        <AnimatedNavLink to="/coverage">Coverage</AnimatedNavLink>
      </li>

      <li>
        <AnimatedNavLink to="/about">About Us</AnimatedNavLink>
      </li>

      <li>
        <AnimatedNavLink to="/pricing">Pricing</AnimatedNavLink>
      </li>

      <li>
        <AnimatedNavLink to="/blog">Blog</AnimatedNavLink>
      </li>

      <li>
        <AnimatedNavLink to="/contact">Contact</AnimatedNavLink>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/40">
      <div className="navbar max-w-7xl mx-auto shadow-sm rounded-xl px-4">
        {/* Navbar content here */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 text-secondary shadow"
            >
              {links}
            </ul>
          </div>

          <a className="btn btn-ghost text-xl">
            <Logo />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-secondary gap-2">
            {links}
          </ul>
        </div>

        <div className="navbar-end flex gap-3">
          <Link
            to={"/auth/login"}
            className="btn bg-white text-secondary-content rounded-lg border border-primary"
          >
            Sign In
          </Link>
          <Link to={'/auth/register'} className="btn btn-primary text-secondary-content rounded-lg">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
