import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

import React from 'react'

const GradientBg = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-10">
        <BackgroundGradientAnimation />
    </div>
  )
}

export default GradientBg