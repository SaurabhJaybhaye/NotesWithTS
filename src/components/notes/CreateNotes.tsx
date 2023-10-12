import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useAppDispatch } from "../../app/hooks";
import { CreateNote } from "../../models/createNote.model";
import { addNote } from "./noteSlice";

const initialValues: CreateNote = {
  title: "",
  text: "",
  color: "#dfdfdf",
};

const CreateNotes = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      const modifiedValues = {
        ...values,
        id: new Date().toString(),
        date: new Date().toString(),
      };
      dispatch(addNote(modifiedValues));
      formik.resetForm();
    },
  });
  return (
    <>
      <h2>Create Note</h2>
      <Form className="mb-3 mt-3" onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title for note"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your note"
            name="text"
            onChange={formik.handleChange}
            value={formik.values.text}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Notes color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            title="Choose your color"
            name="color"
            onChange={formik.handleChange}
            value={formik.values.color}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
