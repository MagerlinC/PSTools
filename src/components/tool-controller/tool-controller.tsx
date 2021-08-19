import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { TOOL_LIST } from "../../util";
import Tool from "../tool/tool";
import "./tool-controller.scss";

type ToolControllerProps = {};
function ToolController({}) {
  let { id }: { id: string } = useParams();
  return (
    <div className={"tool-controller"}>
      <Tool toolObject={TOOL_LIST.find((tool) => tool.id === parseInt(id))} />
    </div>
  );
}
export default ToolController;
