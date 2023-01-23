import React, { useEffect, useState } from "react";
import { ImageList, ImageListItem } from "@mui/material";
import axios from "axios";

export const TabPanelUI = ({ tabName }) => {
  const [itemData, setItemData] = useState([]);
  const apiKey = "563492ad6f917000010000012111ffd97e2744938e519ed473b43aa9";
  const url = `https://api.pexels.com/v1/search?query=${tabName}&per_page=12`;

  const fetchImageData = async () => {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: apiKey,
      },
    });
    const { photos } = data;
    setItemData(photos);
  };
  useEffect(() => {
    fetchImageData();
  }, [tabName]);
  return (
    <div>
      <ImageList
        sx={{ width: "100%", height: "100%" }}
        cols={3}
        rowHeight={164}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.id} sx={{ m: 2 }}>
            <img
              src={`${item.src.medium}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.src.medium}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.alt}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
