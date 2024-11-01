import React, { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: (event: MouseEvent | TouchEvent) => void // Define the type for the callback
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Specify event type
      if (!ref.current || ref.current.contains(event.target as Node)) {
        // Type assertion for target
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
