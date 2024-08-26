import qrcode from "qrcode";
import { io } from "..";

export default function onQR(qr: string) {
  qrcode.toString(qr, { type: "terminal", small: true }, (err, res) => {
    console.log(res);
  });

  qrcode.toDataURL(qr, (err, url) => {
    io.emit("qr", url);
    console.log("qrcode emited");
  });
}
