const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb means callback
    cb(null, path.join(__dirname, "../../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now() + ".jpg");
  },
});
const upload = multer({ storage: storage });

module.exports = upload;
