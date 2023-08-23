"use client"
import React from 'react';
import { Switch } from "@nextui-org/react";
import { setLanguage } from '@/redux/features/languageSlice';
import { RiEnglishInput } from "react-icons/ri";
import { HiAcademicCap } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";

const EnglishIcon = (props) => (
    <RiEnglishInput
        {...props}
    >
    </RiEnglishInput>
);

const SpanishIcon = (props) => (
    <HiAcademicCap

        {...props}
    >
    </HiAcademicCap>
);

function LanguageSwitch() {
    const dispatch = useDispatch()
    const currentLanguage = useSelector(state => state.language); 

    const handleLanguageChange = () => {
        const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
        dispatch(setLanguage(newLanguage));
    };

    return (
        <>
            <Switch
            size="lg"
            color="default"
            onValueChange={handleLanguageChange}
            isSelected={currentLanguage === 'es'}
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <SpanishIcon className={className} />
                ) : (
                    <EnglishIcon className={className}/>
                )
            }
        >
        </Switch>
        </>
    );
}

export default LanguageSwitch;