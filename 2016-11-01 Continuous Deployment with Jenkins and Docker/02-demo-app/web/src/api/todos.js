import request from "superagent";
import config from '../config';

export function getAll() {
  return new Promise((resolve, reject) => {
    request
      .get(config.apiHost + '/todo')
      .end(function (err, res) {
        if (err) return reject(err);
        if (res) {
          if (!res.ok) return reject(res.body);
          resolve(res.body);
        }
      })
  })
}
