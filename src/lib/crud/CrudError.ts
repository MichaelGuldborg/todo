import { getStatusText } from './getStatusText';

export interface CrudErrorParams {
  message: string;
  statusCode: number;
}

export class CrudError extends Error {
  type: 'CRUD_ERROR';
  statusCode: number;

  constructor(params: CrudErrorParams) {
    super(params.message);
    this.type = 'CRUD_ERROR';
    this.statusCode = params.statusCode;
  }
}

export const isCrudError = (e: unknown): e is CrudError => {
  return typeof e === 'object' && (e as CrudError).type === 'CRUD_ERROR';
};

export const createCrudError = (statusCode: number): CrudError => {
  const message = getStatusText(statusCode);
  return new CrudError({ message, statusCode });
};
