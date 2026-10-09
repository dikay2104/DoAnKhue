import cardOneImage from '../assets/images/card_1.jpg'
import cardTwoImage from '../assets/images/card_2.jpg'
import cardThreeImage from '../assets/images/card_3.jpg'

const artwork = {
  sorting: cardOneImage,
  symbols: cardTwoImage,
  contamination: cardThreeImage,
}

export default function NewsArtwork({ variant }) {
  return <img className="news-artwork-image" src={artwork[variant]} alt="" />
}
