import React from 'react';
// import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from "./Filter.module.css"

function CustomTabPanel(props) {
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

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };



export default function Filter({filters,selectedFilterIndex,setSelectedFilterIndex}) {

  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={selectedFilterIndex} onChange={handleChange} aria-label="basic tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: 'var(--color-primary)',
          },
        }}>
        {filters.map((ele, id) => (
          <Tab className={styles.tab} label={ele.label} key={id} {...a11yProps(id)} />
        ))}
      </Tabs>
      {filters.map((ele,id)=>(
        <CustomTabPanel value={ele.label} index={id}/>
      ))}
      </Box>
    </Box>
  );
}