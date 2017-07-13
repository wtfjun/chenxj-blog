import mongoose, { Schema } from 'mongoose'

/**
 * 用户模型
 * @param {String} name 昵称
 * @param {String} password 密码
 * @param {String} create_time 创建日期
 * */
const UserSchema = new Schema({
  username: {
    type: String,
    index: true,
    required: true,
    trim: true
  },
  isAdmin: {
    type: String,
    default: 0
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  token: {
    type: String,
    trim: true
  },
  create_time: Date
})

export default mongoose.model('User', UserSchema)
