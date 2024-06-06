import React from 'react'
import MCCircle from '../src/assets/images/mc-circle.svg'
import AppUI from '../src/assets/images/appui.png'
import MCLogo from '../src/assets/images/sg-logo.png'
import QRCode from '../src/assets/images/qrcode.png'

function LandingPage() {
  return (
    <div className='landingpage-main-container'>
      {/* <div className='mc-circle-container'>
        <img src={MCCircle} />
      </div> */}
      <div className='landing-page-info-container'>
        <div className='info-text-container'>
          <div>
            <img src={MCLogo} className='landing-mc-logo' />
          </div>
          <div>
            <span className='digital-first-title'>Digital First</span>
          </div>
          <div className='digital-first-body-text-container'>
           <span className='df-body'>Digital First is a narrative outlining a best-in-class digital app experience for issuers, proven globally to elevate portfolio performance. Specific app features, coupled with deliberate screen design, make valuable capabilities easily navigable, yielding a truly delightful app experience to consumers.</span>
           <span className='df-body'>The Digital First PWA presents this paradigm narrative in app form, summarizing design research conclusions from digital banking apps worldwide.</span>
           <span className='df-body'>Scan the QR code below to get started:</span>
          </div>
          <div>
            <img src={QRCode} className='qr-code-image' />
          </div>
          <div className='digital-first-body-text-container'>
         
           <span className='df-caption'>This demo app is only built for use on Apple iPhone via Safari browser.</span>
          </div>
        </div>
        <div className='info-ui-image-container'>
          <img src={AppUI} className='app-ui' />
        </div>
      </div>

    </div>
  )
}

export default LandingPage