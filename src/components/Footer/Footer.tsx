import { Container, Navbar } from 'react-bootstrap'

import SVG_TG from '/public/images/tg.svg'
import SVG_VK from '/public/images/vk.svg'
import YANDX_TG from '/public/images/yandx.svg'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <Navbar
      bg="light"
      style={{
        position: 'fixed',
        top: '94%',
        left: 0,
        width: '100%'
      }}
    >
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 50
        }}
      >
        <Navbar.Brand href="#home">
          <img
            src={SVG_TG}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand>
          <img
            src={SVG_VK}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand>
          <img
            src={YANDX_TG}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
