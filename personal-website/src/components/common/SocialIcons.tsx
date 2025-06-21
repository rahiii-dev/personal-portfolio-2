import { Github, Linkedin, Instagram } from "lucide-react";

const SocialIcons = ({ vertical = false }: { vertical?: boolean }) => {
    const wrapper = vertical
        ? "flex flex-col items-center gap-6"
        : "flex gap-6";
    return (
        <div className={wrapper}>
            <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-beige hover:text-beige-accent transition"
            >
                <Github className="w-5 h-5" />
            </a>
            <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-beige hover:text-beige-accent transition"
            >
                <Linkedin className="w-5 h-5" />
            </a>
            <a
                href="https://instagram.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-beige hover:text-beige-accent transition"
            >
                <Instagram className="w-5 h-5" />
            </a>
        </div>
    );
};

export default SocialIcons;
