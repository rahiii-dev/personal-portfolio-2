import { Boxes } from "@/components/ui/background-boxes";
import ResumeButton from "../common/ResumeButton";
import SocialIcons from "../common/SocialIcons";
import { Button } from "../ui/moving-border";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/motion";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-bg-alt">
            <div className="absolute inset-0 w-full h-full bg-bg z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />

            <motion.div
                className="absolute top-6 right-6 z-30"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={0}
            >
                <ResumeButton resumeLink="/Rahib_KV_Resume.pdf" />
            </motion.div>


            {/* Content */}
            <motion.div
                initial="hidden"
                animate="visible"
                className="text-center max-w-xl mx-auto space-y-6 z-20"
            >
                <motion.p
                    custom={1}
                    variants={fadeInUp}
                    className="text-4xl md:text-5xl text-beige-muted font-light tracking-wide leading-tight"
                >
                    Hey, I’m <span className="text-beige font-semibold">Rahib K V</span> 👋
                </motion.p>

                <motion.h1
                    custom={2}
                    variants={fadeInUp}
                    className="text-sm md:text-base font-light text-tx-muted tracking-wide"
                >
                    I build modern web products as a <span className="text-beige">Full Stack Developer</span>.
                </motion.h1>

                <motion.div custom={3} variants={fadeInUp}>
                    <Button as="a" href="#projects">View My Works</Button>
                </motion.div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={4}
            >
                <SocialIcons />
            </motion.div>

        </section>
    );
};

export default Hero;
