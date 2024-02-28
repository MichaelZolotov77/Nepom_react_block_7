import React, { useEffect } from "react";
import somePlugin from "plugin";

export const Effect = () => {
  // what effect does
  useEffect(() => {
    const handler = () => {};
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  useEffect(function initPlugin() {
    somePlugin.init();

    return () => {
      somePlugin.destroy();
    };
  }, []);

  return <div></div>;
};

// Для того, чтобы было более понятно, что за эффект,
// дают либо комментарий сверху, либо объявляют именную функцию
