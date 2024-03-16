import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const page = () => {
  return (
    <div className="min-h-screen ">
      <div className="flex flex-col flex-wrap items-center justify-center gap-6">
        <p className="font-bold text-3xl sm:text-4xl">My Projects</p>

          <Stack direction="row" spacing={2}>
            <Button variant="outlined" href="#outlined-buttons">
              All
            </Button>
            <Button variant="outlined" href="#outlined-buttons">
              Frontend
            </Button>
            <Button variant="outlined" href="#outlined-buttons">
              Backend
            </Button>
            <Button variant="outlined" href="#outlined-buttons">
              HTML/css
            </Button>
            <Button variant="outlined" href="#outlined-buttons">
              Javascript
            </Button>
            <Button variant="outlined" href="#outlined-buttons">
              React
            </Button>
          </Stack>
        
      </div>
    </div>
  );
};

export default page;
