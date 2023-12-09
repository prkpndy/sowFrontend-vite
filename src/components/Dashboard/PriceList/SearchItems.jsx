import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

export default function SearchItems({ translatedData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [articleTerm, setArticleTerm] = useState("");

  const handleSearch = (event, term, key) => {
    event.preventDefault();

    console.log("Search form submitted");
  };

  const handleIconSearchClick = (term, key) => {
    console.log("Search icon pressed");
  };

  return (
    <div>
      <form
        className="flex search-article py-1 rounded-xl"
        onSubmit={(event) => {
          handleSearch(event, articleTerm, "article");
        }}
        noValidate
      >
        <input
          className="search-box text-black"
          type="text"
          style={{ border: "none !important" }}
          name="article"
          id="article"
          value={articleTerm}
          placeholder={translatedData?.price_list?.search_article_number}
          onChange={(event) => {
            setArticleTerm(event.target.value);
          }}
        />
        <IconSearch
          color="#44dcff"
          className="cursor-pointer"
          size={25}
          onClick={() => {
            handleIconSearchClick(articleTerm, "article");
          }}
        />
      </form>

      <form
        className="flex search-article py-1 rounded-xl mt-2"
        onSubmit={(event) => {
          handleSearch(event, searchTerm, "title");
        }}
        noValidate
      >
        <input
          className="search-box text-black"
          type="text"
          style={{ border: "none !important" }}
          name="search"
          id="title"
          value={searchTerm}
          placeholder={translatedData?.price_list?.search_product}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <IconSearch
          color="#44dcff"
          size={25}
          className="cursor-pointer"
          onClick={() => {
            handleIconSearchClick(searchTerm, "title");
          }}
        />
      </form>
    </div>
  );
}
