'use client'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoaderComponent from "../Loader/LoaderComponent";

const ReviewsComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  const user = useSelector((state) => state.user.logged);

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    }
  }, [user]);

  return (
    <>
      {isLoading ? 
        <LoaderComponent /> 
        : (
          <div>
            ReviewsComponent
          </div>
        )
      }
    </>
)};

export default ReviewsComponent;
