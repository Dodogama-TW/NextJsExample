"use client";
import { Dropdown, Button } from "antd";
import React, { MouseEventHandler, useState } from "react";
import { i18n } from "@/i18n-config";
import type { MenuProps } from "antd";
import "../types/languages/language";
import { ItemType } from "antd/es/menu/hooks/useItems";

export default function LanguageSelector() {
  const [currentLanguage, setLanguage] = useState<Locale>("en");

  const handleLanguageChange = (value: Locale) => {
    setLanguage(value);
  };

  // const languageOptions: MenuProps['items'] = i18n.detailLocales.map(
  //   (detailLocale, index) => convertDetailLocaleToMenuItem(detailLocale, (index + 1).toString())
  // )

  const convertDetailLocaleToMenuItem = (
    detailLocale: DetailLocal,
    key: string,
  ): ItemType => {
    return {
      key: key,
      label: (
        <Button onClick={() => handleLanguageChange(detailLocale.code)}>
          {detailLocale.fullname}
        </Button>
      ),
    };
  };

  return (
    // <Dropdown menu={{languageOptions}}>
    //   <Button>{currentLanguage.toUpperCase()}</Button>
    // </Dropdown>
    <></>
  );
}
