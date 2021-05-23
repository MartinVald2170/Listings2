var axios = require("axios");

var axiosInstance = axios.create({
  baseURL:
    "http://javareesbyapi-env.eba-rtdeyeqd.ap-southeast-2.elasticbeanstalk.com/api/v1/getallclients/tenant/reesby",
});

module.exports = axiosInstance;