import React from "react";
import { BottomToolbar } from "../components/designeditor/BottomToolbar";
import { CanvasWorspace } from "../components/designeditor/Canvas";
import { SidePanelContainer } from "../components/designeditor/SidePanelContainer";
import { SideToolbar } from "../components/designeditor/SideToolbar";
import { TopToolbar } from "../components/designeditor/TopToolbar";
// import "./DesignEditor.css"
import classes from './DesignEditor.module.css'

export const DesignEditor = (props) => {
  return (
    <div className={classes.editorMain} >
        <div className={classes.editorSideToolbar}>
        <SideToolbar />
        </div>
        <div className = {classes.editorSidePanel} > 
        <SidePanelContainer />
        </div>
        <div  className =  {classes.editorWorkspace}>
        <div className = {classes.editorSidePanelButton}> </div>
        <div  className =  {classes.editorWorkspaceTopToolbar}>
          <TopToolbar />
          </div>
          <div  className =  {classes.editorCanvas}>
          <CanvasWorspace />
         </div>
         <div  className =  {classes.editorWorkspaceBottomToolbar}>
          <BottomToolbar editorWorkspaceBottomToolbar />
          </div>
        </div>
    </div>
  )
}

export default DesignEditor;