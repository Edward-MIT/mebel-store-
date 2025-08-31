import {registerEnumType} from '@nestjs/graphql'

export enum UserType{
  USER='USER',
  AGENT='AGENT',
  ADMIN = 'ADMIN',
}

registerEnumType(UserType, {name: 'UserType'});

export enum UserStatus{
  ACTIVE = "ACTIVE",
  BLOCK = "BLOCK",
  DELETE = "DELETE",
}
registerEnumType(UserStatus, {name: 'UserStaus'});


export enum UserAuthType {
 PHONE = 'PHONE',
 EMAIL = 'EMAIL',
 TELEGRAM = 'TELEGRAM',
}
registerEnumType(UserAuthType, {name: 'UserAuthType'});
