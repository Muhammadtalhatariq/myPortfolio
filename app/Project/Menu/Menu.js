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
    title: "personal Portfolio",
    desc: " In this project we can use React Tailwind Material UI React icons and many more it is responsive on every type of screen",
    imageUrl: "/1img.png",
    category: "REACT",
  },
  {
    id: 2,
    title: "todo List",
    desc: " In this project we can use React Tailwind React icons and many more. We can Add Remove Edit Mark the todos",
    imageUrl: "/5img.png",
    category: "REACT",
  },
  {
    id: 3,
    title: "Currency converter",
    desc: "In this project we can use React Tailwind React icons  Apis and many more. In this project we can convert our accont in any currency ",
    imageUrl: "/8img.png",
    category: "REACT",
  },
  {
    id: 4,
    title: "Password generator",
    desc: "In this project we can use React Tailwind React icons and many more. in this project the automated password generate in the range of 6 to 100",
    imageUrl: "/6img.png",
    category: "REACT",
  },
  {
    id: 5,
    title: "Bubble game",
    desc: "Bubble  game built with JavaScript. It features a responsive design and a clean, modern look. with a computer player or with a friend.",
    imageUrl: "/2img.png",
    category: "JAVASCRIPT",
  },
  {
    id: 6,
    title: "Calculator",
    desc: "In this project we can use HTML CSSS Javascript any many more",
    imageUrl: "/10img.png",
    category: "JAVASCRIPT",
  },
  {
    id: 7,
    title: "Cards",
    desc: "In this project we can use reactJS framor Motion react icons etc..",
    imageUrl: "/7img.png",
    category: "REACT",
  },
  {
    id: 8,
    title: "Nike Product Landing Page",
    desc: "Responsive Nike product landing page",
    imageUrl: "/3img.png",
    category: "HTML/CSS",
  },
  {
    id: 9,
    title: "Landing Page",
    desc: " In this project we can use HTML/CSS it is Responsive landing page",
    imageUrl: "/4img.png",
    category: "HTML/CSS",
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
          className="rounded-full px-3"
          variant="outlined"
        >
          All
        </Button>
        <Button
          onClick={() => setSelectedCategory("HTML/CSS")}
          className="rounded-full"
          variant="outlined"
        >
          HTML/css
        </Button>
        <Button
          onClick={() => setSelectedCategory("JAVASCRIPT")}
          className="rounded-full"
          variant="outlined"
        >
          Javascript
        </Button>
        <Button
          onClick={() => setSelectedCategory("REACT")}
          className="rounded-full"
          variant="outlined"
        >
          React
        </Button>
      </Stack>

      <div className="flex  flex-wrap gap-5 justify-center pt-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="">
            <Card className="flex flex-row" sx={{ maxWidth: 350 }}>
              <CardActionArea>
                <Image
                  className="item-center"
                  height={100}
                  width={350}
                  src={item.imageUrl}
                />
                <CardContent>
                  <Typography
                    className="font-bold"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {item.title}
                  </Typography>

                  <Typography variant="body2" className="text-lg">
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
