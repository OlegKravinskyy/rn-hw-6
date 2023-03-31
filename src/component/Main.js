import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "../../router";
import { selectStateChange } from "../redux/auth/auth.selectors";
import { authStateCahngeUser } from "../redux/auth/auth.operations";

const Main = () => {
  const stateChange = useSelector(selectStateChange);
  const routing = useRoute(stateChange);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateCahngeUser());
  }, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
