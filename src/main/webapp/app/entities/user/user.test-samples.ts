import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 'c1b7bb7a-6747-4bfc-9f3d-415c3434cc26',
  login: 'ORk',
};

export const sampleWithPartialData: IUser = {
  id: 'f6d773f3-678f-4662-9eed-8631f383cc71',
  login: 'vFMk8',
};

export const sampleWithFullData: IUser = {
  id: '4f2849bf-e699-4c37-85fd-e311498be7d4',
  login: 'QJ@jYN\\GuN4\\]IH0mQY\\L6NKzSP\\dA\\+3wOqq',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
