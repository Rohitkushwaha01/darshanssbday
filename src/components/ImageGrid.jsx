import React from 'react'
import './ImageGrid.css'
import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.jpeg'

import pic1 from '../assets/pic1.jpeg'
import pic5 from '../assets/pic5.jpeg'
import pic6 from '../assets/pic6.jpeg'
import pic8 from '../assets/pic8.jpeg'
import pic10 from '../assets/pic10.jpeg'
import pic11 from '../assets/pic11.jpeg'

import good1 from '../assets/good1.jpeg'
import good2 from '../assets/good2.jpeg'
import good3 from '../assets/good3.jpeg'
import good4 from '../assets/good4.jpeg'
import good5 from '../assets/good5.jpeg'
import good6 from '../assets/good6.jpeg'


const ImageGrid = () => {
  // Sample image data - you can replace these with actual images of Darshanss
  const images = [
    {
      id: 1,
      src: pic1,
      alt: 'Darshanss - Birthday Boy',
      caption: ''
    },
    {
      id: 2,
      src: pic6,
      alt: 'Darshanss - Cricket Fan',
      caption: ''
    },
    {
      id: 3,
      src: pic5,
      alt: 'Darshanss - Friend',
      caption: ''
    },
    {
      id: 4,
      src: pic8,
      alt: 'Darshanss - Smile',
      caption: ''
    },
    {
      id: 5,
      src: pic11,
      alt: 'Darshanss - Celebration',
      caption: ''
    },
    {
      id: 6,
      src: pic10,
      alt: 'Darshanss - Memories',
      caption: ''
    }
  ]

  const images1 = [
    {
      id: 1,
      src: good1,
      alt: 'Darshanss - Birthday Boy',
      caption: ''
    },
    {
      id: 2,
      src: good2,
      alt: 'Darshanss - Cricket Fan',
      caption: ''
    },
    {
      id: 3,
      src: good3,
      alt: 'Darshanss - Friend',
      caption: ''
    },
    {
      id: 4,
      src: good4,
      alt: 'Darshanss - Smile',
      caption: ''
    },
    {
      id: 5,
      src: good5,
      alt: 'Darshanss - Celebration',
      caption: ''
    },
    {
      id: 6,
      src: good6,
      alt: 'Darshanss - Memories',
      caption: ''
    }
  ]

  const images2 = [
    {
      id: 1,
      src: image1,
      alt: 'Darshanss - Birthday Boy',
      caption: ''
    },
    {
      id: 2,
      src: image2,
      alt: 'Darshanss - Cricket Fan',
      caption: ''
    },
    {
      id: 3,
      src: image3,
      alt: 'Darshanss - Friend',
      caption: ''
    },
  ]

  return (
    <section className="image-grid-section">
      <div className="container">
        <h2 className="section-title">
          <span className="csk-accent">Thode photos dekh le</span>
        </h2>
        
        <div className="image-grid">
          {images.map((image) => (
            <div key={image.id} className="image-card">
              <div className="image-container">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  loading="lazy"
                />
                <div className="image-overlay">
                  <span className="image-caption">{image.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      <div className="container">
        <h2 className="section-title">
          <span className="csk-accent">Itna dekh liya hai toh, ab thode acche photos bhi dekh hi le😁</span>
        </h2>
        
        <div className="image-grid">
          {images1.map((image) => (
            <div key={image.id} className="image-card">
              <div className="image-container">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  loading="lazy"
                />
                <div className="image-overlay">
                  <span className="image-caption">{image.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      <div className="container">
        <h2 className="section-title">
          <span className="csk-accent">We Never missed "KL Rahul" Pose</span>
        </h2>
        
        <div className="image-grid">
          {images2.map((image) => (
            <div key={image.id} className="image-card">
              <div className="image-container">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  loading="lazy"
                />
                <div className="image-overlay">
                  <span className="image-caption">{image.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default ImageGrid
