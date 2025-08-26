import React, { useState } from 'react'
import './CricketIcons.css'
import video from '../assets/vid1.mp4'


const CricketIcons = () => {

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
    <section className="cricket-icons-section">
      <div className="container">
        <h2 className="section-title">
          <span className="csk-accent"></span> Thala ko kaise miss kr sakta hu. "Definitely Not"
        </h2>


        {/* MS Dhoni Special Section */}
        <div className="dhoni-special">
          <div className="dhoni-card">
            <div className="dhoni-image">
              <img
                src="https://w0.peakpx.com/wallpaper/967/570/HD-wallpaper-ms-dhoni-caption-cool-dhoni-thala.jpg"
                alt="MS Dhoni - Captain Cool"
                loading="lazy"
              />
            </div>
            <div className="dhoni-info">
              <h3>MS Dhoni</h3>
              <p className="dhoni-title">Captain Cool</p>

              <div className="dhoni-achievements">
                <span>🏆 5x IPL Champion</span>
                <span>🏆 2x World Cup Winner</span>
                <span>🦁 CSK Legend</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cricket Reel Video Section */}
        <div className="cricket-reel-section">


          <div className="reel-container">
            <div className="reel-video-wrapper">

              <div className="video-placeholder">
                <span className="video-instruction">
                  <video
                    className="reel-video"
                    controls
                    muted
                    loop
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </span>
              </div>



            </div>
          </div>
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

        {/* CSK Special Message */}
        <div className="csk-message">
          
          <div>
            <button className="party-button" onClick={handlePartyClick}>
              🎉 Whistle Podu 🎉
            </button>
            <p style={{color: "black"}}>"Press the button bro"</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CricketIcons
