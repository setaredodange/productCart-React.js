import React from 'react'
import './Modal.css';

export default function Modal( {children}) {
  return (
    <div>
        <div class="cd-popup is-visible" role="alert">

            <div className="cd-popup -container" >
                 {children}

                 <a  href="#0" className="cd-popup-close img-replace"> Close</a>
             </div>

        </div>
    </div>
  )
}
