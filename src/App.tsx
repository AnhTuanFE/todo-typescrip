import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Chào anh em</h1>
        {/* <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaulLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            // hiển thị các component theo đường path
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
