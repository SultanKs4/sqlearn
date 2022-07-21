import { React, useState, useEffect, useCallback } from "react";
import { Input, Row } from "antd";

const { Search } = Input;

function SearchBar({
  searchKey = "nama",
  role = "",
  dataSource,
  isSearching,
  setIsSearching,
  setSearchResult,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [key] = useState(searchKey);

  const onSearch = (value) => {
    if (value === "") {
      setIsSearching(false);
      setSearchResult(dataSource);
    } else setIsSearching(true);
    setSearchValue(value);
  };

  const doSearch = useCallback(() => {
    if (isSearching)
      setSearchResult(
        dataSource.filter((item) =>
          item[key].toLowerCase().includes(searchValue.toLowerCase())
        )
      );
  }, [isSearching, searchValue]);

  useEffect(() => {
    doSearch();
  }, [doSearch]);

  return (
    <Row style={{ marginBottom: "1em" }}>
      <Search
        placeholder={`Cari ${searchKey} ${role} . . .`}
        allowClear
        onSearch={onSearch}
      />
    </Row>
  );
}

export default SearchBar;
