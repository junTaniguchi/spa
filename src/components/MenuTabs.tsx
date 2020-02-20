import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import PersonalTable from './PersonalTable';
import UsageDetailTable from './UsageDetailTable';
import UsageChart from './UsageChart';
import CylinderTotal from './CylinderTotal';
import CylinderInstallment from './CylinderInstallment';
import CylinderCashing from './CylinderCashing';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 700,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  paper: {
    width: 800,
  },
}));

export default function MenuTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="お客様情報" {...a11yProps(0)} />
        <Tab label="残高総枠" {...a11yProps(1)} />
        <Tab label="キャッシング残高" {...a11yProps(2)} />
        <Tab label="分割払い残高" {...a11yProps(3)} />
        <Tab label="ご利用明細" {...a11yProps(4)} />
        <Tab label="ご利用傾向分析" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Paper>
          <PersonalTable/>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Paper>
          <CylinderTotal/>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Paper>
          <CylinderCashing/>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Paper>
        <CylinderInstallment/>
      </Paper>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Paper>
          <UsageDetailTable/>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Paper>
          <UsageChart/>
        </Paper>
      </TabPanel>
    </div>
  );
}