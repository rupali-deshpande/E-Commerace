import { Box, Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { productsAction } from "../../store/productsaction";
import { productsActions } from "../../store/productslice";
import { ProdAddNew, ProductsModel } from "../../types";
import { Product } from "../Product/Product";
import { createNewProduct } from "../Service/service";
import SendIcon from "@mui/icons-material/Send";
import { newproductsagaAction } from "../../Saga/sagaaction";

const addProduct = async (path: string, data: {}) => {
  try {
    await axios
      .post(path, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (err) {
    throw err;
  }
};
export function Admin() {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const prizeRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const [enterTitle, setTitle] = useState("");
  const [enterImage, setImage] = useState("");
  const [enterDescription, setDescription] = useState("");
  const [enterPrice, setprice] = useState(Number);
  const [productInput, setproductInput] = useState<ProdAddNew>();
  const dispatch = useDispatch();
  const products = useSelector((state: ProductsModel) => state.products);
  const location = useLocation();
  const urlvalue = new URLSearchParams(location.search);
  const value = urlvalue.get("q") || "React Test";
  const titlehandlerClick = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setTitle(event.target.value);
  };
  const fileSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target);
  };
  const descriptionhandlerclick = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const pricehandlerclick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setprice(event.target.valueAsNumber);
  };

  const submitHandler = (event: React.SyntheticEvent) => {
    console.log(" form data");
    event.preventDefault();
    dispatch({ type: newproductsagaAction.NEWLY_ADD_DATA });

    // TypeScript knows that ref is not null here

    //   axios
    //     .post("http://127.0.0.1:8000/api/v1/products", refObje)
    //     .then((response) => {
    //       console.log("data from form ", response);
    //       //formFN(response.data.product)
    //       return response.data.product;
    //     });

    // console.log(titleRef.current.value);

    // const filledData: ProdAddNew = {
    //   title: enterTitle,
    //   description: enterDescription,
    //   price: enterPrice,
    //   images: undefined,
    // };
    // console.log(enterTitle, enterDescription, enterPrice);
    //setFormData((prevValue) => [...prevValue, filledData]);

    //setTitle('');
    //setDescription('');
    //setprize(0);
  };
  const handleInput = (e: React.FormEvent) => {
    // console.log(e)
    setproductInput((prevstate) => {
      const value = (e.target as HTMLInputElement).value;
      console.log(productInput);
      return { ...prevstate, [(e.target as HTMLInputElement).name]: value };
    });
    console.log();
  };
  return (
    <>
      <Box>
        <form onSubmit={submitHandler}>
          <Grid item spacing={3}>
            <TextField disabled id="outlined-disabled" label="Disabled" />
          </Grid>
          <Grid item spacing={3}>
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              inputRef={titleRef}
              onChange={handleInput}
              name="Title"
            />
          </Grid>
          <Grid item spacing={3}>
            <TextField
              id="standard-basic"
              label="Description"
              name="Description"
              variant="standard"
              multiline
              rows={2}
              inputRef={descriptionRef}
              onChange={handleInput}
            />
          </Grid>
          <Grid item spacing={3}>
            <TextField
              id="standard-basic"
              label="price"
              name="price"
              variant="standard"
              inputRef={prizeRef}
              onChange={handleInput}
            />
          </Grid>
          <Grid item spacing={3}>
            <TextField
              id="standard-basic"
              label="image"
              name="price"
              variant="standard"
              inputRef={imageRef}
              onChange={handleInput}
            />
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
          </Grid>
          <Grid item spacing={3}>
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Submit
            </Button>
          </Grid>
        </form>
      </Box>
    </>
  );
}
