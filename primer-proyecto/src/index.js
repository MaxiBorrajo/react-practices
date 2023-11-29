import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorld } from "./components/HelloWorld/HelloWorld.component";
import { User } from "./components/User.component/User.component";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <HelloWorld title="Tierra" />
    <User name="Jorge" />
    <User
      urlProfilePhoto="https://api.contentstack.io/v2/assets/575e4d1c0342dfd738264a1f/download?uid=bltada7771f270d08f6"
      name="Jorgelina"
    />
  </>
);
