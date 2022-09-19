import { useEffect, useRef } from "react";

const DomRef = () => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus;
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default DomRef;
