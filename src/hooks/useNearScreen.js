import { useEffect, useRef, useState } from "react"

export function useNearScreen({ externalRef, once = true } = {}) {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    let observer
    const elemetRelative = externalRef ? externalRef.current : fromRef.current

    //method that waiting for entries
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        once && observer.disconnect() //si es once desconectate
      } else {
        //if !isNearScreen && once=false, then put back isNearScreen=false
        !once && setShow(false)
      }
    }

    // create an observer that controlthe marginDistance
    observer = new IntersectionObserver(onChange, {
      rootMargin: "50px"
    })
    //.current -> reference value
    if (elemetRelative) observer.observe(elemetRelative) //(getElementById('LazyTrending')

    return () => observer && observer.disconnect() //clean
  })
  return { isNearScreen, fromRef } //send the engagment fromRef
}
