import React from "react";
import { Text } from "@mantine/core";
import { BsThreeDots } from "react-icons/bs";

export default function PriceListItem({ fetchMoreData, hasMore, items }) {
  return (
    <div>
      {items.map((item) => (
        <section className="flex gap-2 " key={item.id}>
          <div className="grid-9 gap-2 mt-2 w-[100%] text-[#1A1A1A] text-sm">
            <div className="col-span-1 border border-solid border-[#adcce9] rounded-[20px] py-[6px] px-2 show-mb-dis ">
              <Text className="call-pricelist-height">
                {item.article_number}
              </Text>
            </div>

            <div className="col-span-2 py-[6px] border border-solid border-[#adcce9] rounded-[20px] px-2">
              <Text className="call-pricelist-height">{item.name}</Text>
            </div>

            <div className="col-span-1 border border-solid border-[#adcce9] rounded-[20px] px-2 py-[6px] show-mb-dis ">
              <Text className="call-pricelist-height">{item.in_price}</Text>
            </div>

            <div
              style={{ maxHeight: "50px", overflowY: "auto" }}
              className="col-span-1 border border-solid border-[#adcce9] rounded-[20px] px-2 py-[6px]"
            >
              <Text className="call-pricelist-height">{item.price}</Text>
            </div>

            <div className="col-span-1 border border-solid border-[#adcce9] rounded-[20px] px-2 py-[6px] show-mb-dis">
              <Text className="call-pricelist-height"> {item.in_stock}</Text>
            </div>

            <div className="col-span-1 border border-solid border-[#adcce9] rounded-[20px] px-2 py-[6px] show-mb-dis ">
              <Text className="call-pricelist-height">{item.unit}</Text>
            </div>

            <div className="col-span-2 show-mb-dis border border-solid border-[#adcce9] rounded-[20px] px-2  py-[6px]">
              <Text className="call-pricelist-height">{item.description}</Text>
            </div>
          </div>
          <div className="mt-4 item-menu-pc">
            <BsThreeDots size={22} className="text-[#0f7ee8] cursor-pointer" />
          </div>

          {/* <div className="mt-4 item-menu-pc">
            <ItemMenu
              translatedData={translatedData}
              el={item}
              setItems={setItems}
              items={items}
              user={user}
              reloadAPI={reloadAPI}
              setIsSearching={setIsSearching}
              setProductData={setProductData}
              productData={productData}
            />
          </div>
          <div className="mt-4 mobile-item-menu">
            <MobileItemMenu
              translatedData={translatedData}
              el={item}
              setItems={setItems}
              items={items}
              user={user}
              reloadAPI={reloadAPI}
              setIsSearching={setIsSearching}
            />
          </div> */}
        </section>
      ))}
    </div>
  );
}
