import { Spinner } from "flowbite-react";
import useRoom from "../api/Room/useRoom";
import Cover from "../components/details/Cover";
import Description from "../components/details/Description";
import Footer from "../ui/Footer";
const Detail = () => {
  const { data, isLoading, error } = useRoom();

  return (
    <>
      <div className="relative overflow-hidden">
        {isLoading && (
          <div className="flex h-screen items-center justify-center bg-ligthDark">
            <Spinner color="warning" size="xl" />
          </div>
        )}
        {error && <div>Error: {error.message}</div>}
        {data && (
          <>
            <Cover data={data} />
            <Description data={data} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Detail;
