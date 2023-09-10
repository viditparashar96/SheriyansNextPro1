import React from "react";
import {CircularProgress} from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">

      <CircularProgress color="primary" label="Loading..." />
    </div>
  );
}
