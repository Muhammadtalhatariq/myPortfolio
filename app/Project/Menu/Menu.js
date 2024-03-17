"use client";
import React, { useState } from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const items = [
  {
    id: 1,
    title: "todo List",
    desc: "in this project we can use react javascript any many more",
    imageUrl: "/bg.jpg",
    category : ["ALL", "HTML/CSS", "React"],
  },
  {
    id: 2,
    title: "Currency converter",
    desc: "in this project we can use react javascript any many more",
    imageUrl: "/bg.jpg",
    category: "ALL"
  },
  {
    id: 3,
    title: "Password generator",
    desc: "in this project we can use react javascript any many more",
    imageUrl: "/bg.jpg",
    category: "REACT", 
  },
  {
    id: 4,
    title: "Bubble game",
    desc: "in this project we can use core javascript any many more",
    imageUrl: "/bg.jpg",
    category: "HTML/CSS",
  },
  {
    id: 5,
    title: "Calculator",
    desc: "in this project we can use react javascript any many more",
    imageUrl: "/bg.jpg",
    category: "React",
  },
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <Stack
        className="flex flex-wrap justify-center"
        direction="row"
        spacing={1}
      >

        <Button 
        onClick={() => setSelectedCategory("All")}
        className="rounded-full" 
        variant="outlined">
          All
        </Button>
        <Button
          className="rounded-full"
          variant="outlined"
        >
          Frontend
        </Button>
        <Button
          className="rounded-full"
          variant="outlined"
        >
          Backend
        </Button>
        <Button
        onClick={() => setSelectedCategory("HTML/CSS")}
          className="rounded-full"
          variant="outlined"   
        >
          HTML/css
        </Button>
        <Button
          className="rounded-full"
          variant="outlined"
        >
          Javascript
        </Button>
        <Button
        onClick={() => setSelectedCategory("React")}
          className="rounded-full"
          variant="outlined"
        >
          React
        </Button>
      </Stack>
    
      <div className="flex flex-wrap gap-5 justify-center pt-8">
        {filteredItems.map((item) => (
          <div key={item.id} className=" ">
            <Card sx={{ maxWidth: 350 }}>
              <CardActionArea>
                <Image
                  className="item-center"
                  height={100}
                  width={350}
                  src={item.imageUrl}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
