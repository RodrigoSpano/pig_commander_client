import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJournal } from "@/redux/actions/journalAction";

export default function MyJournalCard() {
  const dispatch = useDispatch();
  const journal = useSelector((state) => state.journalAPI.arrayJournals);

  useEffect(() => {
    /* if(arrayJournals.length === 0){ */
    dispatch(getJournal());
    /* } */
  }, []);


  return (
    <div>
      {journal.map((element) => (
        <div>
          <div>{element.tittle}</div>
          <div>{element.banner_image}</div>
          <div>{element.summary}</div>
          <div>{element.author}</div>

          <div>url de la noticia: {element.url}</div>
        </div>
      ))}
    </div>
  );
}
