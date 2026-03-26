import type { Metadata } from "next";

import { HomeLinkButton, StatusPage } from "@/components/portfolio/StatusPage";

export const metadata: Metadata = {
  title: "Lost in the void",
};

export default function NotFound() {
  return (
    <StatusPage
      codeLabel="404 · uncharted sector"
      title="No signal here"
      quip="This waypoint is not on any star chart—either the route never existed or your URL slipped into a decaying orbit. Plot a new trajectory toward home."
      actions={<HomeLinkButton />}
    />
  );
}
