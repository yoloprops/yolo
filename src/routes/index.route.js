const app = require('express')();

require("./health/health.route")(app);
require("./country/country.route")(app);
require('./state/state.route')(app);
require('./city/city.route')(app);
require('./area/area.route')(app);
require('./guest/guest.route')(app);
require('./auth/auth.route')(app);
require('./admin/admin.route')(app);
require('./s3upload/s3upload.route')(app)
require('./category/category.route')(app);
require('./facility/facility.route')(app);
require('./residence/residence.route')(app);
require('./property/property.route')(app);


module.exports = app;

