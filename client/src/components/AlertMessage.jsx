import React from "react";
import { Alert, Stack, Snackbar, Button } from "@mui/material";
import { setAlertOpen } from "../feature/alert/alertSlice";
import { useDispatch, useSelector } from "react-redux";

const AlertMessage = () => {
  // dispatch
  const dispatch = useDispatch();

  const { isAlertOpen, alertMessage, alertType } = useSelector(
    (store) => store.alert
  );

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(setAlertOpen(false));
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={isAlertOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={alertType}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default AlertMessage;
