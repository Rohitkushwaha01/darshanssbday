import React, { useState } from 'react'
import './HeroSection.css'
import { PartyPopper } from 'lucide-react'

const HeroSection = () => {
  const [showPartyPopper, setShowPartyPopper] = useState(false)

  const handlePartyClick = () => {
    setShowPartyPopper(true)
    setTimeout(() => setShowPartyPopper(false), 4000)
  }

  const confettiColors = [
    ['#e74c3c', '#f39c12', '#e67e22'], // Red, Orange, Dark Orange
    ['#f1c40f', '#f39c12', '#e67e22'], // Yellow, Orange, Dark Orange
    ['#2ecc71', '#27ae60', '#16a085'], // Green, Dark Green, Teal
    ['#3498db', '#2980b9', '#1abc9c'], // Blue, Dark Blue, Light Teal
    ['#9b59b6', '#8e44ad', '#e74c3c'], // Purple, Dark Purple, Red
    ['#e67e22', '#d35400', '#e74c3c'], // Orange, Dark Orange, Red
    ['#f1c40f', '#f39c12', '#e67e22'], // Yellow, Orange, Dark Orange
    ['#2ecc71', '#27ae60', '#16a085'], // Green, Dark Green, Teal
    ['#3498db', '#2980b9', '#1abc9c'], // Blue, Dark Blue, Light Teal
    ['#9b59b6', '#8e44ad', '#e74c3c'], // Purple, Dark Purple, Red
    ['#e74c3c', '#f39c12', '#e67e22'], // Red, Orange, Dark Orange
    ['#f1c40f', '#f39c12', '#e67e22'], // Yellow, Orange, Dark Orange
    ['#2ecc71', '#27ae60', '#16a085'], // Green, Dark Green, Teal
    ['#3498db', '#2980b9', '#1abc9c'], // Blue, Dark Blue, Light Teal
    ['#9b59b6', '#8e44ad', '#e74c3c'], // Purple, Dark Purple, Red
    ['#e67e22', '#d35400', '#e74c3c'], // Orange, Dark Orange, Red
    ['#f1c40f', '#f39c12', '#e67e22'], // Yellow, Orange, Dark Orange
    ['#2ecc71', '#27ae60', '#16a085'], // Green, Dark Green, Teal
    ['#3498db', '#2980b9', '#1abc9c'], // Blue, Dark Blue, Light Teal
    ['#9b59b6', '#8e44ad', '#e74c3c'], // Purple, Dark Purple, Red
  ]

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="birthday-cake">
          🎂
        </div>
        <h1 className="birthday-title">
          Happy Birthday
          <span className="name"> Darshanss! #7</span>
        </h1>
        <p className="birthday-subtitle">
          hazar saal mat jeena lekin jitne saal jeena khushi ko bahoo me leke sona😂
          ab konsi khush woh tu dekh le
        </p>
        <div style={{marginBottom: '15px'}}>
          <button className="party-button" onClick={handlePartyClick}>
            🎉 Whistle Podu 🎉
          </button>
          <p>"Press the button bro"</p>
        </div>


        <div className="csk-theme">
          <span className="csk-logo">🦁</span>
          <span className="csk-text">CSK Forever!</span>
          <span className="csk-logo">🦁</span>

        </div>
      </div>

      <div className="floating-elements">
        <span className="floating-icon">🎈</span>
        <span className="floating-icon">🎉</span>
        <span className="floating-icon">🏏</span>
        <span className="floating-icon">🏆</span>
      </div>

      {showPartyPopper && (
        <div className="party-popper-container">
          {confettiColors.map((colors, i) => (
            <div
              key={i}
              className="party-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                '--color1': colors[0],
                '--color2': colors[1],
                '--color3': colors[2],
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default HeroSection
