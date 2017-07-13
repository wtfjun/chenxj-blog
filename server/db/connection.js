// 数据库连接
import mongoose from 'mongoose'

export default async () => new Promise((resolve, reject)=>{
  mongoose.connect('mongodb://127.0.0.1/chenxjblog', {
    useMongoClient: true
  }, (error) => {
    if (error) {
      (() => {
      console.log('fail to connect mongodb')
      resolve()
    })()
      reject(error.message);
    } else {
      (() => {
        console.log('success to connect mongodb')
        resolve()
      })()
    }
    
  });
});
