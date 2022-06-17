import React from "react";
import { Modal } from "react-bootstrap";

function AddMovement(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Nuevo Movimiento
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label for="select" className="form-label">
                Tipo de Movimiento
              </label>
              <select
                id="select"
                class="form-select"
                aria-label="Default select example"
              >
                <option value="Ingreso">Ingreso</option>
                <option value="Egreso">Egreso</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="description" className="form-label">
                Descripción del Movimiento
              </label>
              <input type="text" className="form-control" id="description" />
            </div>
            <div className="mb-3">
              <label for="amount" className="form-label">
                Monto en $
              </label>
              <input type="number" className="form-control" id="amount" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddMovement;
