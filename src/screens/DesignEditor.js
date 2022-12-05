import React from "react";
import { BottomToolbar } from "../components/designeditor/BottomToolbar";
import { CanvasWorspace } from "../components/designeditor/Canvas";
import { SidePanelContainer } from "../components/designeditor/SidePanelContainer";
import { SideToolbar } from "../components/designeditor/SideToolbar";
import { TopToolbar } from "../components/designeditor/TopToolbar";

export const DesignEditor = (props) => {
  return (
    <div className="mainEditor">
        <SideToolbar/>
        <SidePanelContainer />
        <div  className = "workspace">
          <TopToolbar />
          <CanvasWorspace />
          <BottomToolbar />
        </div>
    </div>
  )
}

export default DesignEditor;