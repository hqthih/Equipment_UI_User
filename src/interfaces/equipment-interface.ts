export enum EEquipmentModalType {
  CREATE_EQUIPMENT = "CREATE_EQUIPMENT",
  UPDATE_EQUIPMENT = "UPDATE_EQUIPMENT",
}

export interface IEquipmentDetail {
  id: number;
  name: string;
  imageUrl: string;
  ownerId: number | null;
  transferredUserIds: number[];
}

export interface IGetEquipmentRequest {
  ownerId?: number;
  name?: string;
  pageNo: number;
  pageSize: number;
}

export interface IGetEquipmentResponse {
  content: IEquipmentDetail[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

export type TCreateRequestEquipment = {
  userId?: number;
  description?: string;
  requestEquipmentTypeId?: string;
};

export type TRequestEquipment = {
  id: number;
  userId: number;
  isPending: boolean;
  description: string;
  requestEquipmentTypeId: number;
  pending: boolean;
};
