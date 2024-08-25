import qrcode from "qrcode";

export default function onQR(qr: string) {
  qrcode.toString(qr, { type: "terminal", small: true }, (err, res) => {
    console.log(res);
  });
}
