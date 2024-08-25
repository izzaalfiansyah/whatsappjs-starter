import qrcode from "qrcode";
import { app } from "..";
// import { io } from "..";

export default function onQR(qr: string) {
  qrcode.toString(qr, { type: "terminal", small: true }, (err, res) => {
    console.log(res);
  });

  qrcode.toDataURL(qr, (err, url) => {
    app.get("/qrcode", (req, res) => {
      return res.send(url);
    });
  });
}
