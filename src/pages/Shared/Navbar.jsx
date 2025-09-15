import { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser, setAuthLoading } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("signed out successfully"))
      .catch((error) => console.log(error))
      .finally(() => setAuthLoading(false));
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {/* for applicant */}
      {user && (
        <>
          <li>
            <NavLink to={"/my-applications"}>My Applicaions</NavLink>
          </li>
        </>
      )}
      {/* for employer */}
      {user && (
        <>
          <li>
            <NavLink to={"/add-job"}>Add Job</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink className="btn btn-ghost text-xl" to={"/"}>
          Creer Coder
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {!user ? (
          <>
            <NavLink className="btn btn-primary btn-outline" to={"/register"}>
              Register
            </NavLink>
            <NavLink className="btn btn-primary" to={"/sign-in"}>
              Sign In
            </NavLink>
          </>
        ) : (
          <button
            onClick={handleSignOut}
            className="btn btn-primary btn-outline"
          >
            Sign out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
