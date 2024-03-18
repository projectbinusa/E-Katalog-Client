import React from "react";
import "../css/Home.css";
import SMKPK from "../aset/SMK PK.png";
import Data from "../aset/pngtree-office-cartoon-data-image_1194691-removebg-preview.png";
import Pembayaran from "../aset/bayar.png"
import Tabungan from "../aset/pembayran.png"
import Keungan from "../aset/uang.png"
import Inventaris from "../aset/inventaris.png" 
import Ziswaf from "../aset/Ziswaf.png"
import PPDB from "../aset/siswa_sma-removebg-preview.png"
import Komunikasi from "../aset/Komunikasi.png"
import APBS from "../aset/apbs.png"
import Kinerja from "../aset/Kinerja (2).png"
import Monitoring from "../aset/Monitoring.png"
import Uang from "../aset/uang-saku.png";
import Logo from "../aset/logo.png"
const Home = () => {
  return (
    <div class="context" >
      <center className="Bg">
        <table
          align="center"
          className="table-flex"
          border="0"
        >
          <tr >
            <td colspan="2">
              <img
                src="https://aksesbersama.my.id/assets/img/logo-sikopin-biru.png"
                className="height-img"
              />
            </td>
            <td colspan="2" align="right">
              <img src={Logo} className="height-img" />
            </td>
          </tr>

          <tr align="center" className="flex-gap-tr"  >
            <td className="width: 20%  gap-flex" >
              <div 
                class="box"
                onclick="window.location='apps/index.php?menu=PENDATAAN'"
              >
                <div class="our-services backups">
                  <div class="icon">
                    {" "}
                    <img
                      src={Data}
                      className="border-radius: 20px width-img-70 pendataan"
                    />{" "}
                  </div>
                  <h3 className="h3" >PENDATAAN</h3>
                </div>
                <h2></h2>
              </div>
            </td>
            <td className="width: 20% gap-flex" >
              <div
                class="box"
                onclick="window.location='apps/index.php?menu=PEMBAYARAN'"
              >
                <div class="our-services backups">
                  <div class="icon">
                    {" "}
                    <img
                      src={Pembayaran}
                      className="border-radius: 20px width-img-72 pembayaran"
                    //   style={{fontSize: "1.5rem"}}
                    />{" "}
                  </div>
                  <h3>PEMBAYARAN</h3>
                </div>
              </div>
            </td>
            <td className="width: 20% gap-flex">
              <div
                class="box"
                onclick="window.location='apps/index.php?menu=TABUNGAN'"
              >
                <div class="our-services backups">
                  <div class="icon">
                    {" "}
                    <img
                      src={Tabungan}
                      className="border-radius: 20px width-img-83 tabungan"
                    />{" "}
                  </div>
                  <h3>TABUNGAN</h3>
                </div>
              </div>
            </td>
            <td className="width: 20% gap-flex">
              <div
                class="box"
                onclick="window.location='apps/index.php?menu=KEUANGAN'"
              >
                <div class="our-services backups">
                  <div class="icon">
                    {" "}
                    <img
                      src={Keungan}
                      className="border-radius: 20px width-img-60 keuangan"
                    />{" "}
                  </div>
                  <h3>KEUANGAN</h3>
                </div>
              </div>
            </td>
          </tr>

          <tr align="center" className="flex-gap-tr">
            <td className="width: 20% gap-flex">
              <div
                class="box"
                onclick="window.location='apps/index.php?menu=INVENTARIS'"
              >
                <div class="our-services settings">
                  <div class="icon">
                    {" "}
                    <img
                      src={Inventaris}
                      className="border-radius: 20px width-img-120 inventaris"
                    />{" "}
                  </div>
                  <h3>INVENTARIS</h3>
                </div>
              </div>
            </td>
            <td className="width: 20% gap-flex">
              <div
                class="box"
                onclick="window.location='apps/index.php?menu=ZISWAF'"
              >
                <div class="our-services settings">
                  <div class="icon">
                    {" "}
                    <img
                      src={Ziswaf}
                      className="border-radius: 20px width-img-100 ziswaf"
                    />{" "}
                  </div>
                  <h3>ZISWAF</h3>
                </div>
              </div>
            </td>
            <td className="width: 20% gap-flex">
              <div
                class="box"
                onclick="window.location='apps/index.php?menu=PPD'"
              >
                <div class="our-services settings">
                  <div class="icon">
                    {" "}
                    <img
                      src={PPDB}
                      className="border-radius: 20px width-img-120 ppd"
                    />{" "}
                  </div>
                  <h3>PPD</h3>
                </div>
              </div>
            </td>
            <td className="width: 20% gap-flex">
              <div
                class="box"
                onclick="window.location='apps/index.php?menu=KOMUNIKASI'"
              >
                <div class="our-services settings">
                  <div class="icon">
                    {" "}
                    <img
                      src={Komunikasi}
                      className="border-radius: 20px width-img-100 komunikasi"
                    />{" "}
                  </div>
                  <h3>KOMUNIKASI</h3>
                </div>
              </div>
            </td>
          </tr>

          <tr align="center" className="flex-gap-tr">
            <td className="width: 20% gap-flex">
              <div
                class="box"
                onclick="window.location='apps/index.php?menu=APBS'"
              >
                <div class="our-services settings">
                  <div class="icon">
                    {" "}
                    <img
                      src={APBS}
                      width="120px"
                      className="border-radius: 20px width-img-120 apbs"
                    />{" "}
                  </div>
                  <h3>APBS</h3>
                </div>
              </div>
            </td>
            <td className="width: 20% gap-flex">
              <div
                class="box"
                onclick="window.location='apps/index.php?menu=KINERJA'"
              >
                <div class="our-services settings">
                  <div class="icon">
                    {" "}
                    <img
                      src={Kinerja}
                      className="border-radius: 20px width-img-80 kinerja"
                    />{" "}
                  </div>
                  <h3>KINERJA</h3>
                </div>
              </div>
            </td>
            <td className="width: 20% gap-flex">
              <div
                class="box"
                onclick="window.location='apps/index.php?menu=KONSOLIDASIAN'"
              >
                <div class="our-services settings">
                  <div class="icon">
                    {" "}
                    <img
                      src={Monitoring}
                      className="border-radius: 20px width-img-80 monitoring"
                    />{" "}
                  </div>
                  <h3>MONITORING</h3>
                </div>
              </div>
            </td>
            <td className="width: 20% gap-flex">
              <div
                class="box"
                onclick="window.location='apps/index.php?menu=UANGSAKU'"
              >
                <div class="our-services settings">
                  <div class="icon">
                    {" "}
                    <img
                      src={Uang}
                      className="border-radius: 20px width-img-80 saku"
                    />{" "}
                  </div>
                  <h3>UANG SAKU</h3>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="4" align="center" style={{paddingTop:"30px", paddingBottom:"30px"}}>
              <p style={{color:"black"}}>Copyright &copy; Sikopin 2021</p>
            </td>
          </tr>
        </table>
      </center>
    </div>
  );
};
export default Home;
