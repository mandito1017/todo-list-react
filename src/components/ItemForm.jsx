import './ItemPage.scss';
import { Form, Button } from 'react-bootstrap';

function ItemForm({ name, setName, description, setDescription, dueDate, setDueDate, onAdd, buttonText }) {
  return (
    <div className="item-form">
      <Form.Group className="mb-3">
        <Form.Label className="form-label-custom">Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input-custom"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="form-label-custom">Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input-custom"
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label className="form-label-custom">Due Date</Form.Label>
        <Form.Control
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="form-input-custom"
        />
      </Form.Group>
      <Button className="btn-add-item w-100" onClick={onAdd}>
        {buttonText}
      </Button>
    </div>
  );
}

export default ItemForm;