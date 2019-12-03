import { IUserContact } from './iuser-contact';

export interface IUser {
  username: string;
  firstName: string;
  lastName: string;
  userContact: IUserContact;
}
