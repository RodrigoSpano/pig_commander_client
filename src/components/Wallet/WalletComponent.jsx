import { useEffect, useState } from "react";
import FormWallet from "./FormWallet/FormWallet";
import MyBalance from "../MyBalance/MyBalance";
import SpendingCategoriesComponent from "./SpendingCategoriesComponent";
import {
  getCategoriesAction,
  getMethodsAction,
} from "@/redux/actions/otherInfoActions";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { filterCreatedCategory } from "@/redux/features/otherInfoSlice";
import LoaderComponent from "../Loader/LoaderComponent";

export default function WalletComponent() {
  const [cookies, setCookie] = useCookies();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const user = useSelector((state) => state.user.logged);
  const selectedLanguage = useSelector((state) => state.language); // Obtén el idioma seleccionado del estado

  useEffect(() => {
    dispatch(filterCreatedCategory())
    dispatch(getMethodsAction(cookies.token));
    dispatch(getCategoriesAction(cookies.token));

    if (user) {
      setIsLoading(false);
    }
  }, [user]);

  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <>
        <div className="grid auto-rows-auto gap-5">
          <div className="grid grid-cols-2 grid-rows-5 gap-2.5 bg-lightGray p-2.5 h-screen">
            <div className="border bg-white rounded-lg shadow-xl m-2.5 col-span-1 row-span-5">
        {selectedLanguage === 'en' ? (
          <MyBalance />
        ) : 'hola'}
            </div>
            <div className="col-span-1 border bg-white rounded-lg shadow-xl m-2.5 row-span-3 ">
              <FormWallet />
            </div>
            <div className="col-span-1 border bg-white rounded-lg shadow-xl m-2.5 row-span-2">
              <SpendingCategoriesComponent />
            </div>
          </div>
        </div>
      </>
      )}
    </>
  );
}
