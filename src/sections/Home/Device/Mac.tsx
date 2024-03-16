import React from "react";
import { MacbookScroll } from "@components/ui/macbook-scroll";

export function MacScroll() {
  return (
    <div className="overflow-hidden w-full bg-slate-950">
      <MacbookScroll
        title={
          <span>Let Vision AI agents automate tasks on your computer</span>
        }
      />
    </div>
  );
}
