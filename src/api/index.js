import {baseURL,getRequset,postRequset,putRequset,deleteRequset} from "./request"

// Vaptcha ID
export const vaptchaID = "5bb9a277fc650e00a4155567";

// 验证码渲染图片接口
export const drawCodeImageURL = baseURL+"/common/captcha/draw/";

// 测试
export const test=(params)=>{
  return getRequset('/common/captcha/init');
}

// 获取验证码
export const initCaptcha=(params)=>{
  return getRequset('/common/captcha/init');
}

// 登录
export const login=(params)=>{
  return postRequset('/login',params);
}
