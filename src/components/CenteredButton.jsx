import React from 'react'

function CenteredButton({children}) {
  return (
    <div style={{textAlign: "center"}}>
        <button>{children}</button>
    </div>
  )
}

export default CenteredButton