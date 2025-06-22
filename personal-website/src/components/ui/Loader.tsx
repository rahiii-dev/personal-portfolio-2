import { motion } from "framer-motion";

type LoaderProps = {
  size?: number;
  colour?: string;
};

const Loader = ({ size = 40, colour= "var(--color-beige)" }: LoaderProps) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`text-[${colour}]`}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <defs>
        <linearGradient id="beigeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={colour} stopOpacity="1" />
          <stop offset="100%" stopColor={colour} stopOpacity="0" />
        </linearGradient>
      </defs>

      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="url(#beigeGradient)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="200"
        strokeDashoffset="50"
      />
    </motion.svg>
  );
};

export default Loader;
