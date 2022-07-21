import Signin from "../components/Signin";
import Signup from "../components/Signup";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Login.css";
import ThemeSwitch from "../components/ThemeSwitch";
import useLocalStorage from "use-local-storage";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Login = ({ setIsLog,theme,setTheme }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // let boolean
  // const [theme,setTheme]=useLocalStorage('theme'?'dark':'light')
  // const switchTheme=()=>{
  //   const newTheme=theme==='light'?'dark':'light'
   
  //   if(newTheme==='light'){
  //     boolean=false;
  //   }
  //   else{
  //     boolean=true
  //   }
  //   setTheme(newTheme)
  // }
let boolean
if(localStorage.getItem("theme")==="light"){
  boolean=false;
}
else{
  boolean=true;
}
  return (
    <div className="log" data-theme={theme}>
      <div className="tabbar">
        <ThemeSwitch onClick={()=>{
          if(theme==="light"){
            setTheme("dark")
            localStorage.setItem("theme","dark")
          }
          else{
            setTheme("light")
            localStorage.setItem("theme","light")
          }
        }} 
        defaultChecked={boolean}
        />
        <h3 className="merhaba">Merhaba,</h3>
        <h5 className="girisYap">Giriş yap veya hesap oluştur!</h5>
        <p className="divider"></p>
        <div className="log-action">
          <Box sx={{ width: "100%" }}> 
          {/* burada classname yoktu */}
            <Box sx={{ borderColor: "divider", marginLeft: 7 }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab  label={<b className="tabs">Giriş Yap</b>} {...a11yProps(0)} />
                <Tab  label={<b className="tabs">Üye Ol</b>} {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {<Signin setIsLog={setIsLog} />}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {<Signup setIsLog={setIsLog} />}
            </TabPanel>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Login;
