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
                custom={4}
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
                    custom={0}
                    variants={fadeInUp}
                    className="text-4xl md:text-5xl text-beige-muted font-light tracking-wide leading-tight"
                >
                    Hey, I’m <span className="text-beige-accent font-semibold font-mono">Rahib K V</span>
                    <motion.span
                        initial={{ rotate: 0 }}
                        animate={{
                            rotate: [0, 20, -10, 20, -5, 0],
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 1.2,
                            ease: "easeInOut",
                        }}
                        className="inline-block origin-[70%_70%]" 
                    >
                        👋
                    </motion.span>

                </motion.p>

                <motion.h1
                    custom={1}
                    variants={fadeInUp}
                    className="text-sm md:text-base text-beige-muted tracking-wide"
                >
                    I build modern web products as a <span className="text-beige-accent font-medium font-mono">Full Stack Developer</span>.
                </motion.h1>

                <motion.div custom={2} variants={fadeInUp}>
                    <Button as="a" href="#projects">View My Works</Button>
                </motion.div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={3}
            >
                <SocialIcons />
            </motion.div>

        </section>
    );
};

export default Hero;
