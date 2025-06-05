import React from "react";

export default function useDocumentTitle(title: string) {
  const baseTitle = "KalkuRate";
  React.useEffect(() => {
    document.title = `${title} - ${baseTitle}`;
  }, [title]);
}
