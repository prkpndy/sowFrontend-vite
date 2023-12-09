"use client";

import { useEffect, useRef, useState } from "react";
import { IconPrinter } from "@tabler/icons-react";
import { Center } from "@mantine/core";

import {
  AdvancedMode,
  // ComponentLoader,
  DashNavbar,
  Loader,
  MenuBar,
  NewProduct,
  PriceListItem,
  SearchItems,
  Sorting,
} from "../../../components";
import axiosInstance from "../../../api/axios";

import "./index.css";

// const getTranslatedData = () => {
//   const translatedData = {
//     price_list: {
//       no_products: "No Product",
//       add_product_now: "Add Product",
//       new_product: "New Product",
//       print_list: "Print List",
//       article_number: "Article No.",
//       product_or_service: "Product / Service",
//       in_price: "In Price",
//       price: "Price",
//       in_stock: "In Stock",
//       unit: "Unit",
//       description: "Description",
//       article_number_placeholder: "Enter article number",
//       product_service_placeholder: "Enter product name",
//       in_price_placeholder: "Enter in price",
//       price_placeholder: "Enter price",
//       in_stock_placeholder: "Enter stock",
//       unit_placeholder: "Enter unit",
//       description_placeholder: "Enter description",
//       save: "Save",
//       close: "Close",
//       search_article_number: "Search Article No ..",
//       search_product: "Search Product ..",
//       advanced_mode: "Advanced Mode",
//       advanced_mode_text_1:
//         "In advanced mode - Unit - you have a dedicated field for unit on the invoices and price list.",
//       advanced_mode_text_2:
//         "In advanced mode - Full - you have a dedicated field for article number and for unit on the invoices and price list.",
//       advanced_mode_text_3:
//         "It is only recommended to use Advanced mode - Full if you need to use article number, as it will impact the layout of the invoice to a great degree, as a lot more information is needed on the invoice. [THIS IS FOR TEST]",
//       advanced_mode_text_4:
//         "For most users - Ordinary mode - (and for some, Advanced mode - Unit) is the best option to use.",
//       ordinary_mode: "Ordinary Mode",
//       advanced_mode_unit: "Advanced Mode - Unit",
//       advanced_mode_full: "Advanced Mode - Full",
//     },
//   };

//   return translatedData;
// }

export default function PriceListPage() {
  // const translatedData = getTranslatedData();

  const [translatedData, setTranslatedData] = useState({});

  useEffect(() => {
    axiosInstance("/language/pricelist")
      .then((response) => {
        setTranslatedData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const [productData, setProductData] = useState({
  //   article_number: null,
  //   name: null,
  //   price: null,
  //   in_price: null,
  //   description: null,
  //   in_stock: null,
  //   unit: null,
  // });

  // const [searchItem, setSearchItems] = useState({
  //   searchTerm: "",
  //   searchKey: "",
  //   searchType: "",
  // });

  // const [searchOffset, setSearchOffset] = useState(1);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  // const [isSearching, setIsSearching] = useState(false);
  const scrollableDivRef = useRef(null);

  const reloadAPI = async () => {
    axiosInstance(`/pricelist/${0}`)
      .then((response) => {
        setItems(response.data?.data);
        setIndex((prevIndex) => {
          return prevIndex + 2;
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    // try {
    //   const response = await axiosInstance.get(`/products?offset=0`);
    //   setItems(response.data);
    //   setIsSearching(false);
    //   setIsLoading(false);
    // } catch (error) {
    //   console.log(error);
    // }

    // setIsLoading(false);
    // setItems([
    //   {
    //     id: 1,
    //     article_number: 123,
    //     name: "Computer",
    //     in_price: 50000,
    //     price: 70000,
    //     in_stock: "Yes",
    //     unit: 100,
    //     description: "HP Computer",
    //   },
    //   {
    //     id: 2,
    //     article_number: 127,
    //     name: "Laptop",
    //     in_price: 60000,
    //     price: 90000,
    //     in_stock: "Yes",
    //     unit: 145,
    //     description: "Acer Laptop",
    //   },
    // ]);
  };

  useEffect(() => {
    reloadAPI();
  }, []);

  const fetchMoreData = () => {
    axiosInstance(`pricelist${index}`)
      .then((response) => {
        setItems((prevItems) => {
          return [...prevItems, ...response.data?.data];
        });
        setIndex((prevIndex) => {
          return prevIndex + 2;
        });
        response.data?.data.length > 1 ? setHasMore(true) : setHasMore(false);
      })
      .catch((error) => {
        console.log(error);
      });

    // axiosInstance
    //   .get(`/products?offset=${index}`)
    //   .then((res) => {
    //     setItems((prevItems) => [...prevItems, ...res.data]);
    //     setIndex((prevIndex) => prevIndex + 1);
    //     res.data.length > 0 ? setHasMore(true) : setHasMore(false);
    //   })
    //   .catch((err) => showNotification(err.response));
  };

  // const handleSearch = async (searchKey, searchTerm, searchType) => {
  //   setSearchItems({
  //     searchKey: searchKey,
  //     searchTerm: searchTerm,
  //     searchType: searchType,
  //   });
  // setIsSearching(true);
  // try {
  //   const response = await axiosInstance.get(
  //     `/products?${searchTerm}=${searchKey}&search_type=${searchType}&offset=0`
  //   );
  //   setItems(response.data);
  //   setIsSearching(false);
  // } catch (error) {
  //   showNotification(error.response);
  //   console.log(error.response.data.error);
  //   setIsSearching(false);
  // }
  //   setIndex((prevIndex) => prevIndex + 1);
  // };

  return (
    <section>
      <DashNavbar translatedData={translatedData} />
      <section
        className="w-12/12 m-auto flex gap-5"
        style={{
          height: "90vh",
          overflow: "hidden",
        }}
      >
        <div className="menu-side-bar">
          <MenuBar />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {items.length === 0 ? (
              <Center w={400} h={100} className="m-auto min-h-screen">
                <section className=" text-[#1A1A1A] -mt-20 text-center ">
                  <Center>
                    <img src="/pricelist/add.svg" alt="add items" />
                  </Center>
                  <p className="my-6">
                    {translatedData?.price_list?.no_products}
                  </p>
                  <div className="w-[inherit] mt-2">
                    <NewProduct
                      translatedData={translatedData}
                      text={translatedData?.price_list?.add_product_now}
                      py={"4"}
                      height={""}
                      px={"8"}
                    />
                  </div>
                </section>
              </Center>
            ) : (
              <section className="mt-10 main-price-list-container">
                <div className="prod-content">
                  <SearchItems translatedData={translatedData} />
                  <div className="psd-2 flex gap-12 place-content-between">
                    <NewProduct
                      translatedData={translatedData}
                      text={translatedData?.price_list?.new_product}
                      py={"2"}
                      height={"h-10"}
                      px={"6"}
                    />

                    <div
                      className="flex gap-2 px-4 py-2 rounded-xl shadow-md text-[#808080] h-10 cursor-pointer btn-text-price"
                      onClick={() => {
                        console.log("Print clicked");
                      }}
                    >
                      <button className="text-[#1A1A1A] mb-text">
                        {translatedData?.price_list?.print_list}
                      </button>
                      <IconPrinter
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                          fontWeight: "900",
                          borderRadius: "50%",
                          color: "#66d6f2",
                          marginTop: "0px",
                        }}
                      />
                    </div>
                    <AdvancedMode translatedData={translatedData} />
                  </div>
                </div>

                <section className="mt-8">
                  <div className={"grid-9 w-[95%] text-[#1A1A1A] gap-5 pb-2"}>
                    <div className="px-2 col-span-1 show-mb-dis">
                      <div className="flex place-content-between">
                        <p>{translatedData?.price_list?.article_number}</p>
                        <Sorting />
                      </div>
                    </div>
                    <div className="col-span-2 px-1">
                      <div className="flex gap-5 ml-2">
                        <p>{translatedData?.price_list?.product_or_service}</p>
                        <Sorting />
                      </div>
                    </div>
                    <div className="col-span-1 pl-6 show-mb-dis">
                      {translatedData?.price_list?.in_price}
                    </div>
                    <div className="col-span-1 ml-8">
                      {translatedData?.price_list?.price}
                    </div>
                    <div className="col-span-1 ml-8 show-mb-dis">
                      {translatedData?.price_list?.in_stock}
                    </div>
                    <div className="px-2 ml-8 show-mb-dis">
                      {translatedData?.price_list?.unit}
                    </div>
                    <div className="col-span-2 px-2 ml-8 show-mb-dis">
                      {translatedData?.price_list?.description}
                    </div>
                  </div>

                  <div
                    id="scrollableDiv"
                    ref={scrollableDivRef}
                    className="scrollbarWidth"
                  >
                    <PriceListItem
                      fetchMoreData={fetchMoreData}
                      hasMore={hasMore}
                      items={items}
                    />
                  </div>
                </section>
              </section>
            )}
          </>
        )}
      </section>
    </section>
  );
}
