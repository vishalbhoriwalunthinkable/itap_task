import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../apis/fetchUsers";
import SearchBox from "../../components/SearchBox";
import ListItem from "../../components/ListItem/ListItem";
import ContentWrap from "../../components/ContentWrap";
import "./userList.css";

function UserList() {
  const [data, setData] = useState({
    isLoading: false,
    isError: false,
    listData: [],
  });
  const [text, setText] = useState("");
  const [searchedValue, setSearchedValue] = useState(data.listData || []);

  // @api call to fetch data
  useEffect(() => {
    setData({
      ...data,
      isLoading: true,
    });
    fetchUsers()
      .then((res) => {
        setData({
          ...data,
          isLoading: false,
          listData: res.body,
        });
        setSearchedValue(res.body);
      })
      .catch(() => {
        setData({
          isLoading: false,
          isError: true,
          listData: [],
        });
      });
  }, []);

  // Searching function
  function handleTextChange(event) {
    const { value } = event.target;
    const filterValue = data.listData.filter(
      (val) =>
        val.name
          .toLocaleLowerCase()
          .trim()
          .includes(event.target.value.toLocaleLowerCase().trim()) ||
        val.email
          .toLocaleLowerCase()
          .trim()
          .includes(event.target.value.toLocaleLowerCase().trim())
    );
    setSearchedValue(filterValue);
    setText(value);
  }

  return (
    <div className="View__UserList">
      <h1>Users List</h1>
      <div className="View__UserList__Container">
        <SearchBox onChange={handleTextChange} value={text} />
        <ContentWrap isFetching={data.isLoading} isError={data.isError}>
          {searchedValue.length ? (
            <>
              {searchedValue.map((data, index) => (
                <ListItem data={data} key={index * 2 + 1} index={index} />
              ))}
            </>
          ) : (
            <div className="Item__Not__Found">Item not found!</div>
          )}
        </ContentWrap>
      </div>
    </div>
  );
}

UserList.propTypes = {};

export default UserList;
