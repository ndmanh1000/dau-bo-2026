import React from "react";
import AvocadoOil from "./component/body/avocado-oil";
import Bejob from "./component/header/bejob";
import { SnackbarProvider, useSnackbar } from "notistack";

function App() {
  return (
    <SnackbarProvider>
      <div className="bg-white pt-3 w-full mx-auto overflow-x-hidden">
        <div className="fixed top-0 z-50 bg-white shadow-md w-full animate-fade-in-down overflow-x-hidden">
          <div className="container-custom overflow-x-hidden">
            <Bejob />
          </div>
        </div>
        <div>
          <AvocadoOil />
        </div>
      </div>
    </SnackbarProvider>
  );
}

export default App;
