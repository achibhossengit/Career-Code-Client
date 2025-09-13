import { motion } from "motion/react";
import team1 from "../../assets/image/team1.jpg";
import team2 from "../../assets/image/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[60vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{ y: [20, 120, 20] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="max-w-sm rounded-t-4xl rounded-br-4xl border-s-8 border-b-8 border-blue-600 shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ x: [50, 100, 50] }}
            transition={{ repeat: Infinity, duration: 10 }}
            className="max-w-sm rounded-t-4xl rounded-br-4xl border-s-8 border-b-8 border-blue-600 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold"
          >
            Find your Better{" "}
            <motion.span
              animate={{ color: ["#F54927", "#2EF527", "#4D27F5"] }}
              transition={{ repeat: Infinity, duration: 1, repeatDelay: 2 }}
            >
              Jobs
            </motion.span>{" "}
            here!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
