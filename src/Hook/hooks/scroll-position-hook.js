import { useEffect, useState } from "react";

function useScrollPosition() {
  const [position, setPosition] = useState(0);
  useEffect(() => {

    const handleScroll = () => {
      setPosition(window.scrollY)
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return position;
}

export default useScrollPosition;