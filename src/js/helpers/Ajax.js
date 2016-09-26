class Ajax {
  _xhr(options) {
    const xhr = new XMLHttpRequest();

    xhr.open(options.method, options.url, true);

    xhr.onload = function() {
      if (this.status != 200) {
        var error = new Error(this.statusText);

        error.code = this.status;

        options.reject(error);

        return;
      }

      options.resolve(this.response);
    };
    xhr.onerror = function() {
      options.reject(new Error("Network Error"));
    };

    if (options.data) {
      xhr.send(data);

      return;
    }

    xhr.send();
  }

  get(url) {
    return new Promise((resolve, reject) => {
      this._xhr({
        method: 'GET',
        url,
        resolve,
        reject
      });
    });
  }
}

export default new Ajax();
