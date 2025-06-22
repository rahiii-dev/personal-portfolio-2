import Loader from "../ui/Loader";


const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-bg transition-opacity">
        <Loader  size={70} colour="var(--color-beige-accent)" />
    </div>
  );
};

export default PageLoader;
