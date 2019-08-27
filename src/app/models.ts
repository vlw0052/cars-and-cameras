export interface Vehicle {
  id: number;
  name: string;
}

export interface Camera {
  id: number;
  deviceNo: string;
}

export interface Assignment {
  id: number;
  cameraId: number;
  vehicleId: number;
  dateCreated: Date;
  deleted: boolean;
}
