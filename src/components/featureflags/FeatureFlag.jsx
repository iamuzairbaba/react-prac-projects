import React, { useContext } from "react";
import Themeswitch from "../themeswitch/Themeswitch";
import Accordion from "../accordion/Accordion";
import ScrollIndicator from "../scrollindicator/ScrollIndicator";
import TicTacToe from "../tictactoe/TicTacToe";
import { FeatureFlagsContext } from "./context";
import Navmenu from "../navmenu/Navmenu";
import ColorGenerator from "../colorgenerator/Colorgenerator";

const FeatureFlag = () => {
  const { enabledFlags } = useContext(FeatureFlagsContext);
  const checkEnabled = (currentItem) => {
    return enabledFlags[currentItem];
  };
  const components = [
    { key: "showLightandDark", component: <Themeswitch /> },
    { key: "showAccordion", component: <Accordion /> },
    { key: "scrollIndicator", component: <ScrollIndicator /> },
    { key: "showTictacToe", component: <TicTacToe /> },
    { key: "showTreeView", component: <Navmenu /> },
    { key: "showRandomColorgenerator", component: <ColorGenerator /> },
  ];
  return (
    <div>
      <h1>FeatureFlag</h1>
      {components.map((componentItem) =>
        checkEnabled(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
};

export default FeatureFlag;
