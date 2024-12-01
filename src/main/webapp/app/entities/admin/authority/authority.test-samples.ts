import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '877b4916-1a55-4dc0-8d88-cbb5582c9852',
};

export const sampleWithPartialData: IAuthority = {
  name: 'aa48400e-965a-4351-bc38-62753c79adce',
};

export const sampleWithFullData: IAuthority = {
  name: 'fafda305-412b-4bac-82b1-cb37fd469c6c',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
