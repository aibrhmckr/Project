import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageIcon from "@mui/icons-material/Language";
import React, { useState,useEffect } from "react";
import { Language } from "./Language";
import { I18nProvider, LOCALES } from "./i18n";
import translate from "./i18n/translate";
const LanguageSelector = () => {
  const languages = [
    { id: 1, code: "en", name: "English" },
    { id: 2, code: "tr", name: "Türkçe" },
    { id: 3, code: "de", name: "Deutsch" },
  ];
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    window.location.reload()

  };
  const open = Boolean(anchorEl);

  const [locale, setLocale] = useState(localStorage.getItem("locale"));

  return (
    <I18nProvider locale={locale}>
      <div>
        <Button className="language-button"
          endIcon={<LanguageIcon />}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {translate("language-button")}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {languages.map((item) => {
            return (
              <MenuItem
                key={item.id}
                onClick={() => {
                  console.log(item.name, "clicked");
                  //localStorage.setItem()
                  if (item.id === 1) {
                    localStorage.setItem("locale", LOCALES.ENGLISH);
                  } else if (item.id === 2) {
                    localStorage.setItem("locale", LOCALES.TURKISH);
                  } else {
                    localStorage.setItem("locale", LOCALES.GERMAN);
                  }
                  handleClose();
                }}
              >
                {item.name}
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    </I18nProvider>
  );
};
export default LanguageSelector;
