import React from 'react'
import { animate, AnimatePresence, motion, useMotionValue } from 'framer-motion'
import { MainTitle, TitleContainer, Button, Overlay } from './styles'

const transition = {
  type: 'spring',
  bounce: 0,
}

const pageStyle = {
  width: '100vw',
  height: '100vh',
  display: 'inline-block',
  flex: 'none',
}

const slides = [
  {
    background:
      'https://images.pexels.com/photos/3312671/pexels-photo-3312671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Exterior',
  },
  {
    background:
      'https://images.prismic.io/level-group/b1c9a6f3-cc8b-46a6-bb4e-70c975f92397_Monteverde+Exterior+Fachada.png?auto=compress,format&rect=0,0,1920,1080&w=1280&h=720',
    tag: 'Residential',
  },
  {
    background:
      'https://images.prismic.io/level-group/7c936804-37ba-41cc-aac3-af4c2eaeddcd_semilla+interior+1.png?auto=compress,format&rect=0,0,1920,1080&w=1280&h=720',
    tag: 'Bedroom',
  },
  {
    background:
      'https://images.prismic.io/level-group/c86593b2-c36f-4dcc-81ed-ce9bde0b316d_semilla+vista+aerea.png?auto=compress,format&rect=0,0,1920,1080&w=1280&h=720',
    tag: 'Concepts',
  },
  {
    background:
      'https://images.prismic.io/level-group/af20ecc8-f80a-4480-b134-021c486e7442_wineClub+-+vista+exhibicion.png?auto=compress,format&rect=0,0,1920,1080&w=1280&h=720',
    tag: 'Business',
  },
]

const Slider = ({ children, x, i }) => (
  <motion.div
    style={{
      ...pageStyle,
      x,
      left: `${i * 100}%`,
      right: `${i * 100}%`,
    }}
  >
    {children}
  </motion.div>
)

// eslint-disable-next-line react/display-name
const Contaier = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflowX: 'hidden',
      display: 'flex',
    }}
  >
    {props.children}
  </div>
))

const Carousel = ({ children }) => {
  const x = useMotionValue(0)
  const containerRef = React.useRef(null)
  const [index, setIndex] = React.useState(0)

  const calculateNewX = () => -index * (containerRef.current?.clientWidth || 0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNext = () => {
    setIndex(index + 1 === slides.length ? 0 : index + 1)
  }

  React.useEffect(() => {
    const controls = animate(x, calculateNewX(), {
      ...transition,
      duration: index === slides.length - 1 ? 1 : 2,
    })
    return controls.stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  React.useEffect(() => {
    const timer = setInterval(() => handleNext(), 6000)
    return () => clearInterval(timer)
  }, [handleNext])

  return (
    <Contaier ref={containerRef}>
      <TitleContainer
        initial={{ paddingTop: 50, opacity: 0 }}
        animate={{
          paddingTop: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.5, repeat: 'no' }}
        style={{ position: 'absolute', width: '100vw', height: '100vh' }}
      >
        <MainTitle
          style={{
            fontSize: '5rem',
            lineHeight: '6rem',
            color: '#FFF',
            filter: 'drop-shadow(3px 3px 2px #3333335d)',
            zIndex: 9999,
            position: 'absolute',
            left: '8%',
            top: '20%',
          }}
        >
          Architect Studio
        </MainTitle>
        <p
          style={{
            fontSize: '1.2rem',
            lineHeight: '1.5rem',
            color: '#FFF',
            filter: 'drop-shadow(3px 3px 2px #3333335d)',
            zIndex: 9999,
            position: 'absolute',
            left: '8%',
            top: '38%',
            maxWidth: '45%',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          commodo enim ut sapien interdum vehicula. In facilisis ex sed rutrum.
        </p>
        <Button
          style={{
            background: 'transparent',
            border: '0.1rem solid #fff',
            zIndex: 9999,
            position: 'absolute',
            left: '8%',
            top: '50%',
            fontSize: '1.2rem',
            lineHeight: '1.5rem',
            minWidth: '20rem',
            padding: '1rem 2rem',
            color: '#FFF',
          }}
        >
          See All
        </Button>
      </TitleContainer>

      {slides.map((item, i) => (
        <Slider x={x} i={i} key={i}>
          <img
            key={i}
            width={'100%'}
            height={'100%'}
            src={item.background}
            style={{ objectFit: 'cover' }}
          />
        </Slider>
      ))}
      <Overlay />
      <AnimatePresence>
        {slides.map((item, i) => (
          <>
            {i === index && (
              <motion.h2
                key={i}
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 0.4,
                }}
                exit={{ y: 50, opacity: 0 }}
                transition={{
                  duration: 0.5,
                  repeat: 'no',
                  delay: 1,
                }}
                style={{
                  position: 'absolute',
                  right: '-20%',
                  bottom: '-40%',
                  fontSize: '20rem',
                  lineHeight: '15rem',
                  color: '#FFF',
                }}
              >
                {item.tag}
              </motion.h2>
            )}
          </>
        ))}
      </AnimatePresence>
    </Contaier>
  )
}

export default Carousel
