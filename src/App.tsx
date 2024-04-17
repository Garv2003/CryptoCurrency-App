import { Route, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar } from "./components";
import {
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  //  News
} from "./pages";
import "antd/dist/reset.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route
                path="/cryptocurrencies"
                element={<Cryptocurrencies simplified={false} />}
              />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              {/* <Route path="/news" element={<News />} /> */}
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All rights reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
