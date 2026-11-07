import classes from './Feedbacks.module.css'

import img_1 from '../../assets/feedbacks/1.jpg'
import img_2 from '../../assets/feedbacks/2.jpg'
import img_3 from '../../assets/feedbacks/3.jpg'
import img_4 from '../../assets/feedbacks/4.jpg'
import img_5 from '../../assets/feedbacks/5.jpg'
import img_6 from '../../assets/feedbacks/6.jpg'
import img_7 from '../../assets/feedbacks/7.jpg'
import img_8 from '../../assets/feedbacks/8.jpg'
import img_9 from '../../assets/feedbacks/9.jpg'
import img_10 from '../../assets/feedbacks/10.jpg'
import img_11 from '../../assets/feedbacks/11.jpg'
import img_12 from '../../assets/feedbacks/12.jpg'
import img_13 from '../../assets/feedbacks/13.jpg'
import img_14 from '../../assets/feedbacks/14.jpg'
import img_15 from '../../assets/feedbacks/15.jpg'
import { useState } from 'react'

const Feedbacks = () => {
  const [isOpen, setIsOpen] = useState(null);
 const images = [
  img_1, img_2, img_3, img_4, img_5,
  img_6, img_7, img_8, img_9, img_10,
  img_11, img_12, img_13, img_14, img_15,
];

 return (
    <div className='section--dark line-light-section'>
      <div className="container">
        <div className="content">
          <h2 className='h2 line-dark-text'>Отзывы</h2>

          <ul className={classes.list}>
            {images.map((src, index) => (
              <li className={classes.item} key={index} onClick={() => setIsOpen(src)}>
                <img className={classes.img} src={src} alt={`Отзыв ${index + 1}`} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className={classes.lightbox} onClick={() => setIsOpen(null)}>
          <div className={classes.close} onClick={() => setIsOpen(false)}>
            <span ></span>
            <span ></span>
          </div>
          <img
            className={classes.lightboxImg}
            src={isOpen}
            alt="Отзыв"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default Feedbacks;
