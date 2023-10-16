import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequestEquipmentAction } from "../../stores/actions/request-actions";
import { TRootState } from "../../stores/reducers";
import Table, { requestTable } from "../../components/table/Table";
import { ERequestActions } from "../../stores/actions/request-actions/constants";

const RequestPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: TRootState) => state.authUser.userData);
  const requestEquipments = useSelector(
    (state: TRootState) => state.requestReducer.requests
  );
  const isLoadingRequest = useSelector(
    (state: TRootState) => state.loading[ERequestActions.GET_REQUEST_EQUIPMENT]
  );
  useEffect(() => {
    dispatch(getRequestEquipmentAction(userData?.id));
  }, []);

  return (
    <div className="RequestPage">
      <Table
        columns={requestTable}
        rows={requestEquipments}
        isLoading={isLoadingRequest}
        notCheckBoxSelection
      />
    </div>
  );
};

export default RequestPage;
