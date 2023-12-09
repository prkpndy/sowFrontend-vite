import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Center, Modal, Text, TextInput } from "@mantine/core";
import { useState } from "react";

import { IconPlaylistAdd } from "@tabler/icons-react";

export default function NewProduct({ translatedData, text, py, height, px }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [productData, setProductData] = useState({
    article_number: null,
    name: null,
    price: null,
    in_price: null,
    description: null,
    in_stock: null,
    unit: null,
  });
  const [error, setError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductData((prev) => {
      return { ...prev, [name]: value };
    });
    setError((prev) => {
      return { ...prev, [name]: "" };
    });
  };

  // Not sending the product to the server as it is for testing
  const handleSubmit = async (event) => {
    event.preventDefault();
    close();
    console.log("Product added");
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        radius={"xl"}
        size={"lg"}
        centered
        className="demoModalWork"
        styles={{
          header: {
            backgroundColor: "white",
          },
          body: { backgroundColor: "white" },
          close: {
            color: "#47baef",
            background: "none",
          },
        }}
      >
        <Center>
          <Text fw={700} size={"32px"} c={"red"}>
            {translatedData?.price_list?.new_product}
          </Text>
        </Center>
        <form className="px-8" onSubmit={handleSubmit} noValidate>
          <TextInput
            label={translatedData?.price_list?.article_number}
            pt={30}
            name="article_number"
            placeholder={translatedData?.price_list?.article_number_placeholder}
            radius={"xl"}
            onChange={handleChange}
            value={productData.article_number ?? ""}
            styles={{
              input: {
                background: "none",
                border: "1px solid #ccc",
                color: "black",
              },
              label: {
                color: "#000",
              },
            }}
          />
          {error.article_number && (
            <span className="text-red-500 text-sm px-2 mt-1">
              {error.article_number}
            </span>
          )}

          <TextInput
            label={translatedData?.price_list?.product_or_service}
            name="name"
            placeholder={
              translatedData?.price_list?.product_service_placeholder
            }
            radius={"xl"}
            mt={"md"}
            onChange={handleChange}
            value={productData.name ?? ""}
            styles={{
              input: {
                background: "none",
                border: "1px solid #ccc",
                color: "black",
              },
              label: {
                color: "#000",
              },
            }}
          />
          {error.name && (
            <span className="text-red-500 text-sm px-2 mt-1">{error.name}</span>
          )}

          <TextInput
            label={translatedData?.price_list?.in_price}
            type="number"
            name="in_price"
            placeholder={translatedData?.price_list?.in_price_placeholder}
            radius={"xl"}
            mt={"md"}
            onChange={handleChange}
            value={productData.in_price ?? ""}
            styles={{
              input: {
                background: "none",
                border: "1px solid #ccc",
                color: "black",
              },
              label: {
                color: "#000",
              },
            }}
          />
          {error.in_price && (
            <span className="text-red-500 text-sm px-2 mt-1">
              {error.in_price}
            </span>
          )}

          <TextInput
            label={translatedData?.price_list?.price}
            type="number"
            name="price"
            placeholder={translatedData?.price_list?.price_placeholder}
            radius={"xl"}
            mt={"md"}
            onChange={handleChange}
            value={productData.price ?? ""}
            styles={{
              input: {
                background: "none",
                border: "1px solid #ccc",
                color: "black",
              },
              label: {
                color: "#000",
              },
            }}
          />
          {error.price && (
            <span className="text-red-500 text-sm px-2 mt-1">
              {error.price}
            </span>
          )}

          <TextInput
            label={translatedData?.price_list?.in_stock}
            type="number"
            name="in_stock"
            placeholder={translatedData?.price_list?.in_stock_placeholder}
            radius={"xl"}
            mt={"md"}
            onChange={handleChange}
            value={productData.in_stock ?? ""}
            styles={{
              input: {
                background: "none",
                border: "1px solid #ccc",
                color: "black",
              },
              label: {
                color: "#000",
              },
            }}
          />
          {error.in_stock && (
            <span className="text-red-500 text-sm px-2 mt-1">
              {error.in_stock}
            </span>
          )}

          <TextInput
            label={translatedData?.price_list?.unit}
            name="unit"
            placeholder={translatedData?.price_list?.unit_placeholder}
            radius={"xl"}
            mt={"md"}
            onChange={handleChange}
            value={productData.unit ?? ""}
            styles={{
              input: {
                background: "none",
                border: "1px solid #ccc",
                color: "black",
              },
              label: {
                color: "#000",
              },
            }}
          />
          {error.unit && (
            <span className="text-red-500 text-sm px-2 mt-1">{error.unit}</span>
          )}

          <TextInput
            label={translatedData?.price_list?.description}
            name="description"
            placeholder={translatedData?.price_list?.description_placeholder}
            radius={"xl"}
            mt={"md"}
            onChange={handleChange}
            value={productData.description ?? ""}
            styles={{
              input: {
                background: "none",
                border: "1px solid #ccc",
                color: "black",
              },
              label: {
                color: "#000",
              },
            }}
          />
          {error.description && (
            <span className="text-red-500 text-sm px-2 mt-1">
              {error.description}
            </span>
          )}

          <Center className="mt-8">
            <button className="px-8 py-2 bg-[#0f7ee9] text-white rounded-[40px] hover:bg-[#1469ba] duration-500">
              {translatedData?.price_list?.save}
            </button>
          </Center>
        </form>
        <Center mt={"xl"}>
          <button className="pb-6 text-[#0f7ee9] font-bold" onClick={close}>
            {translatedData?.price_list?.close}
          </button>
        </Center>
      </Modal>
      <div
        onClick={open}
        className={`flex gap-2 place-content-between btn-text-price px-${px} py-${py} rounded-xl shadow-md text-[#808080] ${height} cursor-pointer`}
        style={{ zIndex: 10 }}
      >
        <button className="text-[#1A1A1A] mb-text">{text}</button>
        <IconPlaylistAdd />
      </div>
    </>
  );
}
