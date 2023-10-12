import { useFormik } from "formik";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useAppDispatch } from "../../app/hooks";
import { Note } from "../../models/note.model";
import { updateNote } from "./noteSlice";
interface Props {
  note: Note;
  handleDelete: (id: string) => void;
}

const Notes = ({ note, handleDelete }: Props) => {
  const dispatch = useAppDispatch();

  const [edit, setEdit] = useState(false);
  const [id, setId] = useState<string>();

  const formik = useFormik({
    initialValues: {
      title: note.title,
      text: note.text,
      color: note.color,
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.title) {
        errors.title = "Title is required";
      }
      if (!values.text) {
        errors.text = "Text is required";
      }
      return errors;
    },
    onSubmit: (values) => {
      const modifiedValues = {
        ...values,
        id: note.id,
        date: new Date().toString(),
      };
      dispatch(updateNote(modifiedValues));
      setEdit(false);
    },
  });

  return (
    <div className="mb-3">
      <Card style={{ backgroundColor: note.color }}>
        <Card.Body>
          {edit && id ? (
            <>
              <Form className="mb-3 mt-3" onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title for note"
                    name="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    className={formik.errors.title ? "is-invalid" : ""}
                  />
                  {formik.errors.title && (
                    <div className="invalid-feedback">
                      {formik.errors.title}
                    </div>
                  )}
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
                    className={formik.errors.text ? "is-invalid" : ""}
                  />
                  {formik.errors.text && (
                    <div className="invalid-feedback">{formik.errors.text}</div>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="colorInput">Notes color</Form.Label>
                  <Form.Control
                    type="color"
                    id="colorInput"
                    defaultValue="#dfdfdf"
                    title="Choose your color"
                    name="color"
                    onChange={formik.handleChange}
                    value={formik.values.color}
                  />
                </Form.Group>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
                <Button
                  className="ms-3"
                  variant="danger"
                  onClick={() => setEdit(false)}
                >
                  Cancel
                </Button>
              </Form>
            </>
          ) : (
            <>
              <Card.Title>{note.title}</Card.Title>
              <Card.Text>{note.text}</Card.Text>
              <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
            </>
          )}
          {edit && id ? (
            <></>
          ) : (
            <>
              <Button
                className="mt-3"
                variant="primary"
                onClick={() => {
                  setEdit(true);
                  setId(note.id);
                }}
              >
                Update
              </Button>
              <Button
                className="mt-3 ms-3"
                variant="danger"
                onClick={() => {
                  handleDelete(note.id);
                }}
              >
                Delete
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;
