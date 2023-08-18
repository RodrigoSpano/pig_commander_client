'use client'
import { useState, useEffect } from "react"; // Import React and useEffect
import { useSelector } from "react-redux";
import LoaderComponent from "../Loader/LoaderComponent";

const SettingsComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  const user = useSelector((state) => state.user.logged);

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    }
  }, [user]);

  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <div>
          SettingsComponent
        </div>
      )}
    </>
  );
}

export default SettingsComponent;