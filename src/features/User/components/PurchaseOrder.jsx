import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AppBar, Box, makeStyles, Paper, Typography } from '@material-ui/core';
import { TextField, IconButton } from '@material-ui/core';

import { SearchOutlined } from '@material-ui/icons';

PurchaseOrder.propTypes = {};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className="">
          {value === 0 && (
            <Box className="box-search">
              <TextField
                fullWidth
                id="standard-bare"
                variant="outlined"
                placeholder="Search..."
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchOutlined />
                    </IconButton>
                  ),
                }}
              />
            </Box>
          )}
          <Paper elevation={2} className="tab-content" padding={3}>
            <Typography>{children}</Typography>
          </Paper>
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  tabHeader: {
    padding: theme.spacing(1),
  },
}));
function PurchaseOrder(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.tabHeader}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Wait for confirmaton" {...a11yProps(1)} />
          <Tab label="Waiting for the goods" {...a11yProps(2)} />
          <Tab label="Delivering" {...a11yProps(3)} />
          <Tab label="Delivered" {...a11yProps(4)} />
          <Tab label="Cancelled" {...a11yProps(5)} />
        </Tabs>
      </Paper>

      <TabPanel value={value} index={0}>
        All
      </TabPanel>
      <TabPanel value={value} index={1}>
        Wait for confirmaton
      </TabPanel>
      <TabPanel value={value} index={2}>
        Waiting for the goods
      </TabPanel>
      <TabPanel value={value} index={3}>
        Delivering
      </TabPanel>
      <TabPanel value={value} index={4}>
        Delivered
      </TabPanel>
      <TabPanel value={value} index={5}>
        Cancelled
      </TabPanel>
    </div>
  );
}

export default PurchaseOrder;
