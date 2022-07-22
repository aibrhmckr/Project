import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageIcon from "@mui/icons-material/Language";
import React, { useState } from "react";
import { Language } from "./Language";
import { LOCALES } from "./i18n";
const LanguageSelector = () => {
  const languages = [
    { id: 1, code: "en", name: "English" },
    { id: 2, code: "tr", name: "Türkçe" },
    { id: 3, code: "de", name: "Deutsch" },
  ];
  const [lang, setLang] = useState("tr-TR");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const changeLanguage = (item) =>{
    handleClose()
}

const [locale,setLocale]=useState(LOCALES.ENGLISH)
  return (
    <div>
      <Button
        endIcon={<LanguageIcon />}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Language
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
            <MenuItem key={item.id} onClick={() => {
              console.log(item.name,"clicked")
              //localStorage.setItem()
              handleClose()
            }}>
              {item.name}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};
export default LanguageSelector;
