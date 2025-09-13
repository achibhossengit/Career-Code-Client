import Lottie from "lottie-react";

import RegisterAnimation from "../../assets/lotties/register.json";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const SignIn = () => {
  const { authLoading, setAuthLoading, signInUser } = useContext(AuthContext);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ email, password });

    try {
      const userCredential = await signInUser(email, password);
      console.log(userCredential);
    } catch (error) {
      console.log(error);
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "300px" }}
            animationData={RegisterAnimation}
            loop={true}
          />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl font-bold text-center">Login Now</h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button disabled={authLoading} className="btn btn-primary mt-4">
                  {authLoading ? "loging..." : "Login"}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
