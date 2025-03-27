import { Form, Button } from "react-bootstrap";

const InputForm = ({ setCrop, setRegion }) => {
  return (
    <div className="my-3">
      <Form>
        {/* Crop Selection */}
        <Form.Group className="mb-3">
          <Form.Label>Select Crop</Form.Label>
          <Form.Select onChange={(e) => setCrop(e.target.value)}>
            <option value="">Select Crop</option>
            <option value="Wheat">Wheat</option>
            <option value="Rice">Rice</option>
            <option value="Maize">Maize</option>
          </Form.Select>
        </Form.Group>

        {/* Region Input */}
        <Form.Group className="mb-3">
          <Form.Label>Enter Region</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter district/state"
            onChange={(e) => setRegion(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" className="w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default InputForm;
