import {Schema} from 'mongoose';
import { UserAuthType, UserStatus, UserType } from '../enums/user.enum';

const UserSchema = new Schema({
   userType:{
    type: String,
    enum: UserType,
    default: UserType.USER
   },

   userStatus :{
    type:String,
    enum: UserStatus,
    default: UserStatus.ACTIVE
   },

   UserAuthType : {
    type: String,
    enum: UserAuthType,
    default: UserAuthType.PHONE
   },

   userPhone : {
    type: String,
    index: {unique: true, sparse: true},
    required: true
   },

   userNick: {
    type: String,
    index: {unique: true, sparse: true},
    required: true
   },

   userPassword: {
    type: String,
    select:false,
    required: true
   },

   userFullName: {
    type:String,
   },

   memberImage: {
    type: String,
    default: '',
   },

   userAdress: {
    type: String,
   },

   userDesc:{
    type:String,
   },

   userProperties: {
    type: Number,
    default: 0,
   },

   userArticles: {
    type: Number,
    default : 0
   },

   userFollowers: {
    type: Number,
    default:0,
   },

    userFollowings: {
    type: Number,
    default:0,
   },

   userPoints: {
    type: Number,
    default:0,
   },

   userLikes: {
   type: Number,
   default:0,
   },

   userVeiws:{
    type: Number,
    default:0,
   },

   userComments: {
    type: Number,
    default: 0,
   },

   userRank: {
    type: Number,
    default: 0,
   },

   userWarnings: {
    type: Number,
    default: 0,
   },

   userBlocks: {
    type: Number,
    default: 0,
   },

   deletedAt: {
    type: Date,
   }

},
{timestamps: true, collection: 'users'});
