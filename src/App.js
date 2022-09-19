import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MakerLogin from "./screens/maker/login";
import MakerHome from "./screens/maker/home";
import MakerScan from "./screens/maker/scan";
import MakerScanResult from "./screens/maker/scanResult";
import MakerOk from "./screens/maker/scanResultOk";
import MakerNotOk from "./screens/maker/sacnResultNotOk";
import MakerNotOkNext from "./screens/maker/notOkNext";

import CheckerHome from "./screens/checker/home";
import CheckerLogin from "./screens/checker/login";
import CheckerScan from "./screens/checker/scan";
import CheckerScanResult from "./screens/checker/scanResult";
import CheckerOk from "./screens/checker/scanResultOk";
import CheckerNotOkNext from "./screens/checker/notOkNext";
import CheckerNotOk from "./screens/checker/sacnResultNotOk";

import UserScan from "./screens/user/scan";
import UserReviewRes from "./screens/user/scanRes";
import Review from "./screens/user/review";

function App() {
  const [houseId, setHouseId] = useState("");
  const [cred, setCred] = useState("");
  console.log(houseId);
  return (
    <>
      <div className="body">
        <Router>
          <Routes>
            {/* maker page */}
            <Route path="/" element={<MakerLogin />} />
            <Route path="/makerHome" element={<MakerHome />} />
            <Route
              path="/MakerScan"
              element={
                houseId ? (
                  <MakerScanResult houseId={houseId} />
                ) : (
                  <MakerScan setHouseId={setHouseId} houseId={houseId} />
                )
              }
            />
            <Route
              path="/MakerScanResult"
              element={<MakerScanResult houseId={houseId} />}
            />
            <Route
              path="/MakerOk"
              element={<MakerOk houseId={houseId} setHouseId={setHouseId} />}
            />
            <Route
              path="/MakerNotOk"
              element={
                <MakerNotOk
                  houseId={houseId}
                  setHouseId={setHouseId}
                  cred={cred}
                />
              }
            />
            <Route
              path="/MakerNotOkNext"
              element={
                <MakerNotOkNext
                  houseId={houseId}
                  setHouseId={setHouseId}
                  setCred={setCred}
                />
              }
            />
            {/* checker page */}
            <Route path="/CheckerLogin" element={<CheckerLogin />} />
            <Route path="/CheckerHome" element={<CheckerHome />} />
            <Route
              path="/CheckerScan"
              element={
                houseId ? (
                  <CheckerScanResult houseId={houseId} />
                ) : (
                  <CheckerScan setHouseId={setHouseId} houseId={houseId} />
                )
              }
            />
            <Route
              path="/CheckerScanResult"
              element={<CheckerScanResult houseId={houseId} />}
            />
            <Route
              path="/CheckerOk"
              element={<CheckerOk houseId={houseId} setHouseId={setHouseId} />}
            />
            <Route
              path="/CheckerNotOk"
              element={
                <CheckerNotOk
                  ouseId={houseId}
                  setHouseId={setHouseId}
                  cred={cred}
                />
              }
            />
            <Route
              path="/CheckerNotOkNext"
              element={
                <CheckerNotOkNext
                  houseId={houseId}
                  setHouseId={setHouseId}
                  setCred={setCred}
                />
              }
            />
            {/* user page */}
            <Route
              path="/Userreview/:amenity_id"
              element={<UserScan setCred={setCred} setHouseId={setHouseId} />}
            />
            <Route
              path="/UserReviewRes"
              element={
                <UserReviewRes
                  houseId={houseId}
                  setHouseId={setHouseId}
                  cred={cred}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
