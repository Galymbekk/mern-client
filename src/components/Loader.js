import React from 'react'

export default function Loader() {
  return (
    <div style={{ display:'flex', justifyContent:'center', paddingTop:'2rem' }}>
        <div class="preloader-wrapper active">
            <div class="spinner-layer spinner-red-only">
            <div class="circle-clipper left">
                <div class="circle"></div>
            </div><div class="gap-patch">
                <div class="circle"></div>
            </div><div class="circle-clipper right">
                <div class="circle"></div>
            </div>
            </div>
        </div>
    </div>
  )
}
