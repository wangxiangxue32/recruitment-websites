import {request} from "./request";

export function getJobByJId(j_id) {
  return request({
    url: '/job/get_job_by_jid',
    method: 'get',
    params: {
      j_id: j_id
    }
  })
}