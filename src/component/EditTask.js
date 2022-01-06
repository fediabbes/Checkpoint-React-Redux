import { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/actions/todoActions";



function EditTask({ el }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [text, setText] = useState(el.task)
    const dispatch = useDispatch()

    return (
        <>
            <Button variant="outline-secondary" onClick={handleShow}>
                Edit
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl type="text" placeholder="Change Your Task Here !" onChange={(e) => setText(e.target.value)} value={text} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close !
                    </Button>
                    <Button variant="primary" onClick={() => { dispatch(editTask(el.id, text)); handleClose() }} >Confirm !</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTask