import React from 'react';

const useShareableState = () => {
  const [sliderVal, setSliderVal] = React.useState(1)
  const [colour, setColor] = React.useState('#000000')
  const [erase, setErase] = React.useState(false)
  const [chatOpen, setChatOpen] = React.useState(false);

  return {
    sliderVal,
    setSliderVal,
    colour, 
    setColor,
    erase,
    setErase,
    chatOpen, 
    setChatOpen,
  }
}

export default useShareableState