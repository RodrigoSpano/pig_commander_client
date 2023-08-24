"use client"
import React from 'react';
import { setLanguage } from '@/redux/features/languageSlice';
import { useDispatch, useSelector } from "react-redux";
import { Select, SelectItem } from '@tremor/react';


function LanguageSwitch() {
    const dispatch = useDispatch()
    const lang = useSelector(state => state.language)

    const handleLanguageChange = (value) => {
         dispatch(setLanguage(value))
    };

    return (
        <>
      <Select
        label="choose a language"
        className="max-w-xs z-[100]"
        defaultValue={lang}
        onValueChange={handleLanguageChange}
        >
          <SelectItem key={'es'} value={'es'}>  
            Spanish
          </SelectItem>
          <SelectItem key={'en'} value={'en'}>
            English
          </SelectItem>
      </Select>
        </>
    );
}

export default LanguageSwitch;