import React, { Suspense } from "react"
const lazyLoad = (Component: React.LazyExoticComponent<React.ComponentType<any>>) => {
  return (
    <Suspense>
      <Component />
    </Suspense>
  )
}
export default lazyLoad
