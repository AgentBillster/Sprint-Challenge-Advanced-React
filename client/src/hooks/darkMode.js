import { useEffect, useState } from "react";



export const useDarkMode = () => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (value) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [value]);

  return [value, setValue];
};
