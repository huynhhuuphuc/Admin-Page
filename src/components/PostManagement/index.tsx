import React, { useEffect, useState } from "react";
import { Card, Col, Input, Popover, Row, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { EyeOutlined } from "@ant-design/icons";
import FormAccountInformation from "../FormAccountInformation";

interface DataType {
  key: string;
  id: number;
  userId: number;
  title: string;
  body: string;
}

const PostManagement: React.FC = () => {
  const [posts, setPosts] = useState<DataType[]>([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<DataType[]>([]);

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => <a>{id}</a>,
    },
    {
      title: "UserID",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Titlle",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Action",
      key: "action",
      render: (_, entity) => (
        <>
          <Popover
            placement="bottomRight"
            title={<div>Thông tin người dùng {entity.userId}</div>}
            content={<FormAccountInformation entity={entity} />}
            trigger="click"
          >
            <EyeOutlined style={{ fontSize: "16px", color: "#08c" }} />
          </Popover>
        </>
      ),
    },
  ];
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    filterResults(event.target.value);
  };

  const filterResults = (term: string) => {
    const filteredPosts = posts.filter((post) => {
      return (
        post.userId.toString().includes(term) ||
        post.title.toLowerCase().includes(term.toLowerCase())
      );
    });
    setSearchResults(filteredPosts);
  };
  return (
    <div style={{ width: "100%" }}>
      <div style={{ margin: "32px 0", fontSize: "18px", color: "#1e64b6" }}>
        Users Management
      </div>
      <Card>
        <Row justify="center" gutter={16}>
          <Col style={{ width: "400px" }}>
            <Input
              placeholder="UserId/Title"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Col>
        </Row>
      </Card>
      <Table
        columns={columns}
        dataSource={searchTerm ? searchResults : posts}
      />
    </div>
  );
};

export default PostManagement;
