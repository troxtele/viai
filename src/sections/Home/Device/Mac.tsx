import React from "react";
import { MacbookScroll } from "@components/ui/macbook-scroll";
import { useTranslations } from "next-intl";

export function MacScroll() {
  const t = useTranslations();

  return (
    <div className="overflow-hidden w-full bg-slate-950">
      <MacbookScroll title={<span>{t("device.mac")}</span>} />
    </div>
  );
}
