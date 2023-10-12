import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useAppDispatch } from "../../app/hooks";
import { addNote } from "./noteSlice";

interface Props {}

const CreateNotes = (props: Props) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      text: "",
      color: "#dfdfdf",
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
        id: new Date().toString(),
        date: new Date().toString(),
      };
      dispatch(addNote(modifiedValues));
      formik.resetForm();
    },
  });

  return (
    <div className="mt-3">
      <b>Create Note</b>
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
            <div className="invalid-feedback">{formik.errors.title}</div>
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
      </Form>
    </div>
  );
};

export default CreateNotes;
