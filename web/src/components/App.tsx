import React from "react";
import "../index.css";
import { debugData } from "../utils/debugData";
import Button from "@mui/material/Button";
import { Tooltip } from "@mui/material";
import AbcIcon from '@mui/icons-material/Abc';
// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

const App: React.FC = () => {
  return (
    <div className="nui-wrapper">
      <Tooltip title="Groot Development" placement="top" arrow>
        <Button variant="contained" className="bg-blue-700 m-2">
         By Groot Development
        </Button>
      </Tooltip>
      <AbcIcon/>

    </div>
  );
};

export default App;
