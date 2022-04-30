export default {
  get(
    url: string,
    options?: {
      headers?: { [_: string]: string };
      params?: { [_: string]: string };
    }
  ) {
    wx.showLoading({
      title: "加载中",
      mask: true,
    });
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${url}`,
        method: "GET",
        data: options?.params || {},
        header: {
          ...(options?.headers || {}),
        },
        success(request) {
          wx.hideLoading();
          resolve(request.data);
        },
        fail(error) {
          reject(error.errMsg);
        },
      });
    });
  },
  post(
    url: string,
    options?: {
      headers?: { [_: string]: string };
      params?: { [_: string]: string };
    }
  ) {
    wx.showLoading({
      title: "加载中",
      mask: true,
    });
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${url}`,
        method: "POST",
        data: options?.params,
        header: {
          "content-type": "application/json; charset=UTF-8",
          ...(options?.headers || {}),
        },
        success(request) {
          wx.hideLoading();
          resolve(request.data);
        },
        fail(error) {
          reject(error.errMsg);
        },
      });
    });
  },
};
