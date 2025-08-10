import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router";

const JoinCommunity = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const background = useTransform(
    [springX, springY],
    ([latestX, latestY]) =>
      `conic-gradient(from 180deg at ${latestX}px ${latestY}px, #111827, #1f2937, #374151, #111827)`
  );

  useEffect(() => {
    const handleMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    };

    const el = ref.current;
    el.addEventListener("pointermove", handleMove);
    return () => el.removeEventListener("pointermove", handleMove);
  }, [x, y]);

  return (
    <motion.section
      ref={ref}
      style={{
        backgroundImage: background,
        backgroundColor: "#111827",
      }}
      className="w-full max-w-7xl mx-auto flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-500 my-10 p-4 rounded-xl"
    >
      <div className="py-8 px-4 mx-auto w max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Join Our Community
        </h1>
        <p className="mb-8 text-md font-normal text-gray-500 lg:text-md sm:px-16 lg:px-48 dark:text-gray-400">
          Help us preserve history by contributing your own artifact discoveries
          and connecting with fellow history enthusiasts worldwide.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link
            className="btn bg-transparent border-accent text-white p-6"
            to="/addArtifacts"
          >
            Add an Artifacts
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default JoinCommunity;
