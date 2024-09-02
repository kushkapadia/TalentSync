import React, { useEffect } from "react"

function FlashMessages(props) {
  return (
    <div className="floating-alerts">
      {props.messages.map((msg, index) => {
        return (
          <div key={index} className="alert alert-success text-center floating-alert shadow-sm">
            {msg}
          </div>
        )
      })}
    </div>
  )
}

//In react whenever we are looping through a collection and outputting a component for each item in the collection, be sure to give the key.
export default FlashMessages
