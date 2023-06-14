import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

function Example() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Регистрация сотрудника</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ФИО</Form.Label>
              <Form.Control type="text" placeholder="Введите фио" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Должность</Form.Label>
              <Form.Control placeholder="Введите должность" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Дата рождения</Form.Label>
              <Form.Control placeholder="Введите дату" />
            </Form.Group>

            <Form.Select aria-label="Default select example">
              <option>Укажите пол</option>
              <option value="1">Мужской</option>
              <option value="2">Женский</option>
            </Form.Select>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control placeholder="Введите номер" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Отмена
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Example
