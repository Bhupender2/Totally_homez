import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function MyTabs() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabSelect = (index) => {
    setTabIndex(index);
  };

  return (
    <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>

      <TabPanel>
        <h2>Tab 1 content</h2>
        <p>This is the content for Tab 1</p>
      </TabPanel>
      <TabPanel>
        <h2>Tab 2 content</h2>
        <p>This is the content for Tab 2</p>
      </TabPanel>
      <TabPanel>
        <h2>Tab 3 content</h2>
        <p>This is the content for Tab 3</p>
      </TabPanel>
    </Tabs>
  );
}

export default MyTabs;
