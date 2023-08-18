import { Spinner } from "@nextui-org/spinner";

const LoaderComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner color="danger" size="lg" />
    </div>
  );
};

export default LoaderComponent;
