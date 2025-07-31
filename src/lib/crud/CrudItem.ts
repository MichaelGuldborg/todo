export type CrudItem = {
  id: string;
  createdAt?: Date | {seconds: number};
  updatedAt?: Date | {seconds: number};
  createdBy?: string | undefined;
};
