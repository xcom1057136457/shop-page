import request from '/@/utils/request';
import { Methods } from '/@/enums/http';

enum Api {
  GetHomeList = 'GetHomeList'
}

export function GetHomeList(params: unknown) {
  return request({
    url: Api.GetHomeList,
    method: Methods.get,
    params
  });
}
