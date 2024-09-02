import React, { useEffect } from "react"

function Container(props) {
  return (
    <div className={"container py-md-5 " + (props.wide ? "" : "container--narrow")}>
      {props.children}
      {/* javascript expression - React makes it very eeasy for us, it makes any nested jsx content available from this props.childern property */}
    </div>
  )
}

export default Container
