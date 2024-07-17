import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Users from "./pages/Users";
import UserEdit from "./pages/UserEdit";
import UserCreate from "./pages/UserCreate";

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/add" element={<UserCreate />} />
      <Route path="/users/:userId/edit" element={<UserEdit />} />
    </React.Fragment>
  )
);

export default router;
