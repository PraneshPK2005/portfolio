"use client"

import { useSpring, animated } from "react-spring"

interface AnimatedNumberProps {
  n: number
}

export function AnimatedNumber({ n }: AnimatedNumberProps) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  })

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}
