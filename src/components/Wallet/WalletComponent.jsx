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
import WalletComponentEs from "../MyBalance/MyBalanceEs";
import FormWalletEs from "./FormWalletEs/FormWalletEs";
import SpendingCategoriesComponentEs from "./SpendingCategoriesComponentEs";

export default function WalletComponent() {
  const [cookies, setCookie] = useCookies();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const user = useSelector((state) => state.user.logged);
  const selectedLanguage = useSelector((state) => state.language);

  useEffect(() => {
    dispatch(filterCreatedCategory());
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
            <div className="flex flex-col mt-20 md:mt-0 sm:flex-row select-none">

              <section className="sm:w-1/2">
                <div className="m-4 ">
                  {selectedLanguage === "en" ? (
                    <MyBalance />
                  ) : (
                    <WalletComponentEs />
                  )}
                </div>
              </section>

              <section className="sm:w-1/2">
                <div className="col-span-1 bg-white rounded-lg shadow-xl m-2.5 row-span-3 dark:bg-mediumGrayDarkMode">
                  {selectedLanguage === "en" ? <FormWallet /> : <FormWalletEs />}
                </div>

                <div className="col-span-1 bg-white rounded-lg shadow-xl m-2.5 row-span-2 dark:bg-mediumGrayDarkMode ">
                  {selectedLanguage === "en" ? (
                    <SpendingCategoriesComponent />
                  ) : (
                    <SpendingCategoriesComponentEs />
                  )}
                </div>
              </section>

            </div>
        </>
      )}
    </>
  );
}
