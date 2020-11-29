import {request} from "./request";

//获取公司信息
export function getAdmin() {
  return request({
    url: '/admin'
  });
}
