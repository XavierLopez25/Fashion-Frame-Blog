import React, { useState, useEffect } from 'react'
import '../../styles/Header.css'

const Header = ({ words, colors }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [letterIndex, setLetterIndex] = useState(1)
  const [isDeleting, setIsDeleting] = useState(false)
  const [underscoreVisible, setUnderscoreVisible] = useState(true)

  useEffect(() => {
    const typingSpeed = isDeleting ? 60 : 120
    const timeout = setTimeout(() => {
      setDisplayedText(words[currentWordIndex].substring(0, letterIndex))
      if (!isDeleting && letterIndex === words[currentWordIndex].length + 1) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && letterIndex === 0) {
        setIsDeleting(false)
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        setLetterIndex(1)
      } else {
        setLetterIndex((prevIndex) => prevIndex + (isDeleting ? -1 : 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [letterIndex, isDeleting, words, currentWordIndex])

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setUnderscoreVisible((visible) => !visible)
    }, 400)
    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <div className="header">
      <div className="console-container">
        <span id="text" style={{ color: colors[currentWordIndex % colors.length] }}>
          {displayedText}
        </span>
        <div className="console-underscore" style={{ opacity: underscoreVisible ? 1 : 0 }}>
          &#95;
        </div>
      </div>
      <div className="image-banner">
        <img src="src/assets/banner.png" alt="Banner for Site" />
      </div>
    </div>
  )
}

export default Header
