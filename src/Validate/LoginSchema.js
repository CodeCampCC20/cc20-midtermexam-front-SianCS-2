import * as Yup from "yup"

export const schema = Yup.object({
  username: Yup.string().min(6, 'อย่างน้อย 6 หลัก').required('กรอกชื่อผู้ใช้'),
  password: Yup.string().min(7, 'อย่างน้แย 7 หลัก').required('กรอก รหัสผ่าน'),
  task: Yup.string().min(10).required(`เลือกวิชา`)
})