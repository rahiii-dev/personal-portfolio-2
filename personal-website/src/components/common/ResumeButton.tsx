const ResumeButton = ({resumeLink}: {resumeLink: string}) => {
  return (
    <a
      href={resumeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg text-beige-muted hover:text-beige font-medium transition-colors duration-300"
    >
      Resume
    </a>
  );
};

export default ResumeButton;
