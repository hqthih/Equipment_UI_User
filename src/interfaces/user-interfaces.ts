export interface IUserDetail {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  equipmentIds: number[];
  role: string;
}

export interface INotification {
  id: number;
  userOwnerId: number;
  type: string;
  description: null | string;
  createdAt: Date | null;
  read: boolean;
}

export type TSignInRequest = {
  email: string;
  password: string;
};

export type TSignInResponse = {
  token: string;
  refreshToken: string;
  userData: IUserData;
};

export enum EAuthToken {
  ACCESS_TOKEN = "ACCESS_TOKEN",
  REFRESH_TOKEN = "REFRESH_TOKEN",
  DEVICE_TOKEN = "DEVICE_TOKEN",
}

export type TAuthToken = {
  token: string;
  refreshToken: string;
};

export enum EUserModalType {
  CREATE_USER = "CREATE_USER",
  UPDATE_USER = "UPDATE_USER",
}

export type TCreateUserRequest = {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  role: string;
};

export type TUpdateUserRequest = {
  id?: number;
  firstName?: string;
  lastName?: string;
  address?: string;
  email?: string;
  role?: string;
};

export type TTransferEquipment = {
  userId: number;
  equipmentIds: number[];
};

export interface Role {
  id: number;
  name: string;
}

export interface IUserData {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  role: Role;
  enabled: boolean;
  username: string;
  accountNonLocked: boolean;
  authorities: Authority[];
  credentialsNonExpired: boolean;
  accountNonExpired: boolean;
}

export interface Authority {
  authority: string;
}
