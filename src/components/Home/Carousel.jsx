import React from 'react'
import { animate, AnimatePresence, motion, useMotionValue } from 'framer-motion'
import { MainTitle, TitleContainer, Button, Overlay } from './styles'
import { Visible } from 'react-grid-system'

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
      'https://images.pexels.com/photos/4322027/pexels-photo-4322027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Landscape',
  },
  {
    background:
      'https://images.pexels.com/photos/6297244/pexels-photo-6297244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Interior',
  },
  {
    background:
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Residential',
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
      overflow: 'hidden',
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
        <Visible md lg xl xxl xxxl>
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
            commodo enim ut sapien interdum vehicula. In facilisis ex sed
            rutrum.
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
        </Visible>

        <Visible xs sm>
          <MainTitle
            style={{
              fontSize: '3rem',
              lineHeight: '3rem',
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
              maxWidth: '82%',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            commodo enim ut sapien interdum vehicula. In facilisis ex sed
            rutrum.
          </p>
          <Button
            style={{
              background: 'transparent',
              border: '0.1rem solid #fff',
              zIndex: 9999,
              position: 'absolute',
              left: '8%',
              top: '60%',
              fontSize: '1.2rem',
              lineHeight: '1.5rem',
              minWidth: '82%',
              padding: '1rem 2rem',
              color: '#FFF',
            }}
          >
            See All
          </Button>
        </Visible>
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
            <Visible md lg xl xxl xxxl key={`md_${i}`}>
              {i === index && (
                <motion.h2
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
                    width: '100%',
                  }}
                >
                  {item.tag}
                </motion.h2>
              )}
            </Visible>
            <Visible xs sm key={`xs_${i}`}>
              {i === index && (
                <motion.h2
                  initial={{ y: 50, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 0.3,
                  }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    repeat: 'no',
                    delay: 1,
                  }}
                  style={{
                    position: 'absolute',
                    right: '-30%',
                    bottom: '0%',
                    fontSize: '8rem',
                    lineHeight: '5rem',
                    color: '#fff',
                    rotate: '180deg',
                    width: '100%',
                    writingMode: 'vertical-lr',
                  }}
                >
                  {item.tag}
                </motion.h2>
              )}
            </Visible>
          </>
        ))}
      </AnimatePresence>
    </Contaier>
  )
}

export default Carousel
