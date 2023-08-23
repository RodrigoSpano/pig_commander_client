"use client";
import ManagmentComponent from "@/components/Management/ManagementComponent";
import ManagmentComponentEs from "@/components/Management/ManagementComponentEs";
import { getAllInversions } from "@/redux/actions/inversionsActions";
import { getAllSavings } from "@/redux/actions/savingsActions";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";

export default function Managment() {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies();
  useEffect(() => {
    dispatch(getAllSavings(cookies.token));
    dispatch(getAllInversions(cookies.token));
  }, []);
  const selectedLanguage = useSelector((state) => state.language);

  return (
    <div>
      <main>
        {selectedLanguage === "en" ? (
          <ManagmentComponent />
        ) : (
          <ManagmentComponentEs />
        )}
      </main>
    </div>
  );
}
