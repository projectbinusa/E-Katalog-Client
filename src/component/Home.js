import React, { useEffect } from "react";
import AOS from "aos";
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
import Lab from "../aset/programmer.png";
import Wa from "../aset/wa.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="Bg">
        <div className="bg-element">
          <img src={Gelembung} alt="gelembung" className="gelembung" />
        </div>
        <div className="bg-element">
          <img src={Gelembung} alt="gelembung" className="gelembung3" />
        </div>
        <div className="context">
          <center>
            <table align="center" className="table-flex " border="0">
              <tbody>
                <tr className="tbody-tr">
                  <td colSpan="2">
                    <img
                      src={Logo}
                      className="height-img"
                      id="logo-logo"
                      alt="Logo"
                    />
                  </td>
                  <td colSpan="2" align="right">
                    <img
                      src={PT}
                      className="logo-pt"
                      id="logo-logo"
                      alt="Logo"
                    />
                  </td>
                </tr>
                {/* Menu Aplikasi */}
                {/* Baris 1 */}
                <tr align="center" className="flex-gap-tr">
                  <td className="width: 20%  gap-flex">
                    <Link to="/uks">
                      <div className="box">
                        <div className="our-services ">
                          <div className="icon">
                            <img
                              src={UKS}
                              className="border-radius: 20px width-img-70"
                              alt="Logo"
                            />
                          </div>
                          <h3>UKS</h3>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="width: 20% gap-flex">
                    <Link to="/absensi">
                      <div className="box">
                        <div className="our-services ">
                          <div className="icon">
                            <img
                              src={Absensi}
                              className="border-radius: 20px width-img-72"
                              alt="Logo"
                            />
                          </div>
                          <h3>Absensi</h3>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="width: 20% gap-flex">
                    <Link to="/sis">
                      <div className="box">
                        <div className="our-services">
                          <div className="icon">
                            <img
                              src={SIS}
                              className="border-radius: 20px width-img-83"
                              alt="Logo"
                            />
                          </div>
                          <h3>SIS</h3>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="width: 20% gap-flex ">
                    <Link to="/ekampoeng">
                      <div className="box">
                        <div className="our-services ">
                          <div className="icon">
                            <img
                              src={Kampung}
                              className="border-radius: 20px width-img-60"
                              alt="Logo"
                            />
                          </div>
                          <h3>E-Kampoeng</h3>
                        </div>
                      </div>
                    </Link>
                  </td>
                </tr>
                {/* Baris 2 */}
                <tr align="center" className="flex-gap-tr">
                  <td className="width: 20% gap-flex">
                    <Link to="/bayartagihan">
                      <div className="box">
                        <div className="our-services settings">
                          <div className="icon">
                            <img
                              src={BayarTagihan}
                              className="border-radius: 20px width-img-120 "
                              alt="Logo"
                            />
                          </div>
                          <h3>Bayartagihan</h3>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="width: 20% gap-flex">
                    <Link to="/sewaruang">
                      <div className="box">
                        <div className="our-services settings">
                          <div className="icon">
                            <img
                              src={Sewa}
                              className="border-radius: 20px width-img-100 "
                              alt="Logo"
                            />
                          </div>
                          <h3>Sewa Ruang</h3>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="width: 20% gap-flex">
                    <Link to="/bawaslu">
                      <div className="box">
                        <div className="our-services settings">
                          <div className="icon">
                            <img
                              src={Bawaslu}
                              className="border-radius: 20px width-img-120 "
                              alt="Logo"
                            />
                          </div>
                          <h3>Bawaslu</h3>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="width: 20% gap-flex">
                    <Link to="/dinarpos">
                      <div className="box">
                        <div className="our-services settings">
                          <div className="icon">
                            <img
                              src={Komunikasi}
                              className="border-radius: 20px width-img-100 "
                              alt="Logo"
                            />
                          </div>
                          <h3>DinarPos</h3>
                        </div>
                      </div>
                    </Link>
                  </td>
                </tr>
                {/* Baris 3 */}
                <tr align="center" className="flex-gap-tr">
                  <td className="width: 20% gap-flex" colSpan="1">
                    <Link to="/pemilu">
                      <div className="box">
                        <div className="our-services ">
                          <div className="icon">
                            <img
                              src={APK}
                              className="border-radius: 20px width-img-122"
                              alt="Logo"
                            />
                          </div>
                          <h3>Aplikasi Pemilu</h3>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="width: 20% gap-flex">
                    <Link to="/invitation">
                      <div className="box">
                        <div className="our-services ">
                          <div className="icon">
                            <img
                              src={Invit}
                              className="border-radius: 20px width-img-88"
                              alt="Logo"
                            />
                          </div>
                          <h3>E-Invitation</h3>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="width: 20% gap-flex">
                    <Link to="/datacenter">
                      <div className="box">
                        <div className="our-services settings">
                          <div className="icon">
                            <img
                              src={Monitoring}
                              className="border-radius: 20px width-img-80 "
                              alt="Logo"
                            />
                          </div>
                          <h3>Data Center</h3>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="width: 20% gap-flex">
                    <Link to="/kasir">
                      <div className="box">
                        <div className="our-services ">
                          <div className="icon">
                            <img
                              src={Kasir}
                              className="border-radius: 20px width-img-80 "
                              alt="Logo"
                            />
                          </div>
                          <h3>Kasir</h3>
                        </div>
                      </div>
                    </Link>
                  </td>
                </tr>

                {/* Baris 4 */}
                <tr align="center" className="flex-gap-tr">
                  <td className="width: 20% gap-flex">
                    <Link to="/labbahasa">
                      <div className="box">
                        <div className="our-services ">
                          <div className="icon">
                            <img
                              src={Lab}
                              className="border-radius: 20px width-img-122 "
                              alt="Logo"
                            />
                          </div>
                          <h3>Lab Bahasa</h3>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="width: 20% gap-flex">
                    <Link to="/managementwa">
                      <div className="box">
                        <div className="our-services ">
                          <div className="icon">
                            <img
                              src={Wa}
                              className="border-radius: 20px width-img-122 "
                              alt="Logo"
                            />
                          </div>
                          <h3>Management WA</h3>
                        </div>
                      </div>
                    </Link>
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
        </div>
      </div>
    </>
  );
};
export default Home;
