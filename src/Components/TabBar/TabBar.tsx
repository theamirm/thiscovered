/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { useEffect } from "react";

export interface IProps {
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

export const TabBar: React.FC<IProps> = ({ tab, setTab }: IProps) => {
  useEffect(() => {
    const marker = document.querySelector(".marker");
    const activeTab = document.querySelector(".tab.active");

    function indicator(e: Element | null): void {
      if (marker !== null) {
        marker.style.left = e.offsetLeft + "px";
        marker.style.width = e.offsetWidth + "px";
      }
    }

    indicator(activeTab);

    // Remove event listener on unmount
    return () => {
      // setTab(null); // Reset the tab state when the component unmounts
    };
  }, [tab]);

  return (
    <div className="grid-tab-bar">
      <div className="marker" />
      <div
        className={tab === "about" ? "tab active" : "tab"}
        onClick={() => {
          setTab("about");
        }}>
        About
      </div>
      <div
        className={tab === "background" ? "tab active" : "tab"}
        onClick={() => {
          setTab("background");
        }}>
        Background
      </div>
      <div
        className={tab === "infoBox" ? "tab active" : "tab"}
        onClick={() => {
          setTab("infoBox");
        }}>
        Info Box
      </div>
      <div
        className={tab === "checklist" ? "bonus tab active" : "bonus tab"}
        onClick={() => {
          setTab("checklist");
        }}>
        Checklist
      </div>
    </div>
  );
};
