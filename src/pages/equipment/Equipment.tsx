import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table, { equipmentColumn } from "../../components/table/Table";
import { TCreateRequestEquipment } from "../../interfaces/equipment-interface";
import { getEquipmentAction } from "../../stores/actions/equipment-actions";
import { EEquipmentActions } from "../../stores/actions/equipment-actions/constants";
import { TRootState } from "../../stores/reducers";
import "./Equipment.scss";
import RequestModal from "./Modal/RequestModal";
import { createRequestEquipmentAction } from "../../stores/actions/request-actions";

const Equipment = () => {
  const dispatch = useDispatch();

  const isLoadingEquipment = useSelector(
    (state: TRootState) => state.loading[EEquipmentActions.GET_EQUIPMENT]
  );
  const equipments = useSelector(
    (state: TRootState) => state.equipment.equipments
  );
  const userData = useSelector((state: TRootState) => state.authUser.userData);
  const [page, setPage] = useState(1);
  const [isOpenModalRequest, setIsOpenModalRequest] = useState(false);

  const handleGetEquipments = () => {
    if (userData?.role.name === "USER") {
      dispatch(
        getEquipmentAction({
          ownerId: userData?.id,
          name: "",
          pageNo: page - 1,
          pageSize: 5,
        })
      );
    } else {
      dispatch(getEquipmentAction());
    }
  };

  const handleCreateRequest = (values: TCreateRequestEquipment) => {
    console.log();
    dispatch(createRequestEquipmentAction({ userId: userData?.id, ...values }));
  };

  useEffect(() => {
    handleGetEquipments();
  }, []);

  return (
    <div className="Equipment">
      <div className="Equipment__actions">
        <Button variant="contained" onClick={() => setIsOpenModalRequest(true)}>
          Request Equipment
        </Button>
      </div>
      <div className="Equipment__list">
        <Table
          columns={equipmentColumn}
          rows={equipments}
          isLoading={isLoadingEquipment}
          notCheckBoxSelection
        />
      </div>
      <RequestModal
        isOpen={isOpenModalRequest}
        onCreateRequest={handleCreateRequest}
        onCloseModal={() => setIsOpenModalRequest(false)}
      />
    </div>
  );
};

export default Equipment;
