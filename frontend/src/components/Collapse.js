import React, { useState } from 'react'
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <button style={{ width: '80px' }} onClick={() => setIsOpen(!isOpen)}>
                <Tooltip title={props.title} TransitionComponent={Zoom} placement='top' arrow>
                    {props.label}
                </Tooltip>
            </button>
            {isOpen && <div style={{ width: '100%' }}>{props.children}</div>}
        </>
    )
}

export default Collapse
