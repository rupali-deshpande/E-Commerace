import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { Product } from "../Product/Product";

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
    event.preventDefault();

    if (
      titleRef.current != null &&
      descriptionRef.current != null &&
      prizeRef.current != null &&
      imageRef.current != null
    ) {
      const refObje = {
        title: titleRef.current.value,
        description: descriptionRef.current?.value,
        price: prizeRef.current?.valueAsNumber,
        images: imageRef.current?.value,
      };
      // TypeScript knows that ref is not null here
      console.log(refObje);
      //formFN(refObje)
      localStorage.setItem("Form", JSON.stringify(refObje));
      titleRef.current.value = "";
      descriptionRef.current.value = "";
      prizeRef.current.value = "";
      //descriptionRef.current.value="";
      addProduct("https://dummyjson.com/products", refObje);
      console.log(refObje);
      titleRef.current.value = "";
      descriptionRef.current!.value = "";
      prizeRef.current!.value = "";
      imageRef.current!.value = "";
    }
    //   axios
    //     .post("http://127.0.0.1:8000/api/v1/products", refObje)
    //     .then((response) => {
    //       console.log("data from form ", response);
    //       //formFN(response.data.product)
    //       return response.data.product;
    //     });
    else {
      return;
    }

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
  return (
    <form onSubmit={submitHandler} className="form">
      <div>
        <div>
          <input disabled defaultValue={value} />
        </div>
        <div>
          <label>Title </label>
          <input
            value={enterTitle}
            onChange={titlehandlerClick}
            type="text"
            ref={titleRef}
          />
        </div>
        <div>
          <label>Description </label>
          <input
            value={enterDescription}
            onChange={descriptionhandlerclick}
            type="text"
            ref={descriptionRef}
          />
        </div>
        <div>
          <label>prize </label>
          <input
            value={enterPrice}
            ref={prizeRef}
            onChange={pricehandlerclick}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div>
          <label>Image </label>
          <input
            type="file"
            value={enterImage}
            ref={imageRef}
            onChange={fileSelectHandler}
          />
        </div>
      </div>
      <div>
        <button type="submit" value="Submit">
          Submit
        </button>
      </div>
    </form>
  );
}
