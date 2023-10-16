import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { IEquipmentDetail } from "../../interfaces/equipment-interface";
import { TRootState } from "../../stores/reducers";
import TypeColumn from "./request-columns/TypeColumn";
import StateColum from "./request-columns/StateColum";

const OwnerColumn = () => {
  const userOwner = useSelector((state: TRootState) => state.authUser.userData);
  return (
    <div>
      {userOwner?.firstName} {userOwner?.lastName}
    </div>
  );
};

export const equipmentColumn: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "imageUrl",
    headerName: "Image",
    width: 100,
    renderCell: (params: GridRenderCellParams<IEquipmentDetail>) => (
      <img
        src={params.value}
        style={{ objectFit: "cover", height: "70px", objectPosition: "center" }}
      />
    ),
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },

  {
    field: "type",
    headerName: "Type",
    width: 100,
    renderCell: (params: GridRenderCellParams<IEquipmentDetail>) => (
      <TypeColumn categoryId={params.value} />
    ),
  },
  {
    field: "description",
    headerName: "Description",
    width: 350,
    valueGetter: (params: GridValueGetterParams) => {
      return "The morning air was crisp and sharp as Sean walked down the road. The pavement was slippery and cold beneath his feet, like a slimy, wet fish. For more information about words that help describe people, places and things, look at the topic on describing words (Adjectives).";
    },
  },
  {
    field: "ownerId",
    headerName: "Owner",
    width: 150,
    renderCell: (params: GridRenderCellParams<IEquipmentDetail>) => (
      <OwnerColumn />
    ),
  },
];

export const requestTable: GridColDef[] = [
  {
    field: "requestEquipmentTypeId",
    headerName: "Type",
    width: 200,
    renderCell: (params: GridRenderCellParams<IEquipmentDetail>) => (
      <TypeColumn categoryId={params.value} />
    ),
  },
  { field: "description", headerName: "Description", width: 600 },
  {
    field: "state",
    headerName: "State",
    width: 150,
    renderCell: (params: GridRenderCellParams<IEquipmentDetail>) => (
      <StateColum state={params.value} />
    ),
  },
];

interface ITableProps {
  rows?: any[];
  columns: GridColDef[];
  isLoading?: boolean;
  notCheckBoxSelection?: boolean;
  setSelection?: (selection: any[]) => void;
}

export default function Table({
  setSelection,
  rows,
  columns,
  isLoading,
  notCheckBoxSelection,
}: ITableProps) {
  return (
    <div style={{ height: 560, width: "100%", maxWidth: "100%" }}>
      <DataGrid
        rows={!isLoading ? rows || [] : []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        onRowSelectionModelChange={(ids) => {
          const selectedRowsData = ids.map((id) =>
            rows?.find((row) => row.id === id)
          );
          setSelection?.(selectedRowsData);
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection={!notCheckBoxSelection}
        loading={isLoading}
      />
    </div>
  );
}
