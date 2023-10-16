import * as Yup from "yup";
import { Button, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Form, Formik } from "formik";
import Modal from "../../../components/modal/Modal";
import "./RequestModal.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../stores/actions/category-actions";
import { TRootState } from "../../../stores/reducers";
import { TCreateRequestEquipment } from "../../../interfaces/equipment-interface";

interface IRequestModal {
  isOpen: boolean;
  onCreateRequest?: (values: TCreateRequestEquipment) => void;
  onCloseModal: () => void;
}

const RequestModal = ({
  isOpen,
  onCreateRequest,
  onCloseModal,
}: IRequestModal) => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    requestEquipmentTypeId: Yup.string(),
    description: Yup.string(),
  });

  const categories = useSelector(
    (state: TRootState) => state.categoryReducer.categories
  );

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const handleSubmit = (values: TCreateRequestEquipment) => {
    onCreateRequest?.(values);
    onCloseModal();
  };

  return (
    <Modal
      open={isOpen}
      handleCloseModal={onCloseModal}
      title="Create request equipment"
    >
      <div className="RequestModal">
        <Formik
          initialValues={{ requestEquipmentTypeId: "", description: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps) => {
            return (
              <Form>
                <div className="RequestModal__form-field">
                  <TextField
                    variant="outlined"
                    label="Description"
                    size="small"
                    type="textarea"
                    name="description"
                    multiline
                    rows={4}
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    value={formikProps.values.description}
                    className={`form-control ${
                      formikProps.errors.description &&
                      formikProps.touched.description &&
                      "RequestModal__form-error"
                    }`}
                    placeholder="Enter description..."
                  />
                </div>
                <div className="RequestModal__form-field">
                  <TextField
                    variant="outlined"
                    size="small"
                    label="Type"
                    select
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    value={formikProps.values.requestEquipmentTypeId}
                    defaultValue=""
                    name="requestEquipmentTypeId"
                    className={`form-control ${
                      formikProps.errors.requestEquipmentTypeId &&
                      formikProps.touched.requestEquipmentTypeId &&
                      "RequestModal__form-error"
                    }`}
                  >
                    {categories.map((category) => (
                      <MenuItem key="1" value={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className="RequestModal__form-action">
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={!formikProps.dirty || !formikProps.isValid}
                  >
                    Request
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Modal>
  );
};

export default RequestModal;
