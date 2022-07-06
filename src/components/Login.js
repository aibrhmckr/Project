import Signin from "./Signin";
import Signup from "./Signup";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "./Login.css"
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
const Login = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabbar">
      <h3>Merhaba,</h3>
      <h5>Giriş yap veya hesap oluştur!</h5>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderColor: "divider" ,marginLeft:7}}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label={<b>Giriş Yap</b>} {...a11yProps(0)} />
            <Tab label={<b>Üye Ol</b>} {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {<Signin />}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {<Signup/>}
        </TabPanel>

      </Box>
    </div>
  );
};

export default Login;
