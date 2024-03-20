import React from "react";
import "../css/Home.css";
import UKS from "../aset/uks.png";
import Kampung from "../aset/kampung.png";
import Absensi from "../aset/absensi.png";
import SIS from "../aset/SIS.png";
import BayarTagihan from "../aset/pembayaran.png";
import Sewa from "../aset/tabungan.png";
import Bawaslu from "../aset/bawaslu.png";
import Komunikasi from "../aset/Komunikasi.png";
import APK from "../aset/apk.png";
import Invit from "../aset/invitatition.png";
import Monitoring from "../aset/penggajian.png";
import Kasir from "../aset/kasir.png";
import Gelembung from "../aset/gelembung.png";
import Logo from "../aset/LOGO_Katalog.png";
import PT from "../aset/pt-dinartech.png";
const Home = () => {
  return (
    <div className="Bg">
      <div className="bg-element">
        <img src={Gelembung} alt="gelembung" className="gelembung" />
      </div>{" "}
      <div className="bg-element">
        <img src={Gelembung} alt="gelembung" className="gelembung3" />
      </div>{" "}
      <div className="context">
        <center>
          <table align="center" className="table-flex " border="0">
            <tbody>
              <tr className="tbody-tr">
                <td colSpan="2">
                  <img src={Logo} className="height-img" id="logo-logo" />
                </td>
                <td colSpan="2" align="right">
                  <img src={PT} className="logo-pt" id="logo-logo" />
                </td>
              </tr>

              <tr align="center" className="flex-gap-tr kontainer">
                <td className="width: 20%  gap-flex perCard">
                  <div className="box face face2">
                    <div className="our-services backups konten">
                      <div className="icon">
                        {" "}
                        <img
                          src={UKS}
                          className="border-radius: 20px width-img-70 pendataan"
                          aria-hidden="true"
                        />{" "}
                      </div>
                      <div className="face face1">
                        <div className="kontent">
                          <h3 className="h3">UKS</h3>
                        </div>
                      </div>
                    </div>
                    <h2></h2>
                  </div>
                </td>
                <td className="width: 20% gap-flex">
                  <div className="box">
                    <div className="our-services backups">
                      <div className="icon">
                        {" "}
                        <img
                          src={Absensi}
                          className="border-radius: 20px width-img-72 pembayaran"
                          //   style={{fontSize: "1.5rem"}}
                        />{" "}
                      </div>
                      <h3>Absensi</h3>
                    </div>
                  </div>
                </td>
                <td className="width: 20% gap-flex">
                  <div className="box">
                    <div className="our-services backups">
                      <div className="icon">
                        {" "}
                        <img
                          src={SIS}
                          className="border-radius: 20px width-img-83 tabungan"
                        />{" "}
                      </div>
                      <h3>SIS</h3>
                    </div>
                  </div>
                </td>
                <td className="width: 20% gap-flex">
                  <div className="box">
                    <div className="our-services backups">
                      <div className="icon">
                        {" "}
                        <img
                          src={Kampung}
                          className="border-radius: 20px width-img-60 keuangan"
                        />{" "}
                      </div>
                      <h3>E-Kampoeng</h3>
                    </div>
                  </div>
                </td>
              </tr>

              <tr align="center" className="flex-gap-tr">
                <td className="width: 20% gap-flex">
                  <div className="box">
                    <div className="our-services settings">
                      <div className="icon">
                        {" "}
                        <img
                          src={BayarTagihan}
                          className="border-radius: 20px width-img-120 inventaris"
                        />{" "}
                      </div>
                      <h3>Bayartagihan</h3>
                    </div>
                  </div>
                </td>
                <td className="width: 20% gap-flex">
                  <div className="box">
                    <div className="our-services settings">
                      <div className="icon">
                        {" "}
                        <img
                          src={Sewa}
                          className="border-radius: 20px width-img-100 ziswaf"
                        />{" "}
                      </div>
                      <h3>Sewa Ruang</h3>
                    </div>
                  </div>
                </td>
                <td className="width: 20% gap-flex">
                  <div className="box">
                    <div className="our-services settings">
                      <div className="icon">
                        {" "}
                        <img
                          src={Bawaslu}
                          className="border-radius: 20px width-img-120 ppd"
                        />{" "}
                      </div>
                      <h3>Bawaslu</h3>
                    </div>
                  </div>
                </td>
                <td className="width: 20% gap-flex">
                  <div className="box">
                    <div className="our-services settings">
                      <div className="icon">
                        {" "}
                        <img
                          src={Komunikasi}
                          className="border-radius: 20px width-img-100 komunikasi"
                        />{" "}
                      </div>
                      <h3>DinarPos</h3>
                    </div>
                  </div>
                </td>
              </tr>

              <tr align="center" className="flex-gap-tr">
                <td className="width: 20% gap-flex" colSpan="1">
                  <div className="box">
                    <div className="our-services settings">
                      <div className="icon">
                        {" "}
                        <img
                          src={APK}
                          className="border-radius: 20px width-img-122 apbs"
                        />{" "}
                      </div>
                      <h3>Aplikasi Pemilu</h3>
                    </div>
                  </div>
                </td>
                <td className="width: 20% gap-flex">
                  <div className="box">
                    <div className="our-services settings">
                      <div className="icon">
                        {" "}
                        <img
                          src={Invit}
                          className="border-radius: 20px width-img-88 kinerja"
                        />{" "}
                      </div>
                      <h3>E-Invitation</h3>
                    </div>
                  </div>
                </td>
                <td className="width: 20% gap-flex">
                  <div className="box">
                    <div className="our-services settings">
                      <div className="icon">
                        {" "}
                        <img
                          src={Monitoring}
                          className="border-radius: 20px width-img-80 monitoring"
                        />{" "}
                      </div>
                      <h3>Data Center</h3>
                    </div>
                  </div>
                </td>
                <td className="width: 20% gap-flex">
                  <div className="box">
                    <div className="our-services settings">
                      <div className="icon">
                        {" "}
                        <img
                          src={Kasir}
                          className="border-radius: 20px width-img-80 monitoring"
                        />{" "}
                      </div>
                      <h3>Kasir</h3>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  colSpan="4"
                  align="center"
                  style={{ paddingTop: "30px", paddingBottom: "30px" }}
                >
                  <p style={{ color: "black" }}>
                    Copyright &copy; E-Katalog 2024
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
      <div className="bg-element">
        <img src={Gelembung} alt="gelembung" className="gelembung1" />
      </div>{" "}
    </div>
  );
};
export default Home;
