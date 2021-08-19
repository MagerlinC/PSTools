import React, { useState } from "react";
import { ToolType } from "../../util";
import "./tool.scss";

type ToolProps = { toolObject: ToolType | undefined };

function Tool({ toolObject }: ToolProps) {
  return (
    <div className={"tool"}>
      <div className={"tool-name"}>{toolObject?.name}</div>
      <div className={"tool-contents"}>
        {toolObject?.content.map((contentItem) => (
          <div className={"content-item"}>
            <div className={"content-header"}>{contentItem.title}</div>
            <div className={"content-body"}>{contentItem.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Tool;
