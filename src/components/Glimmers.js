import React, { useState } from "react";
// import { Container, Form, Button, Row, Col, Nav, Card } from "react-bootstrap";
// import { Link } from 'react-router-dom"

import { useLocalStorage } from "./useLocalStorage";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Nav,
  Card,
  InputGroup,
} from "react-bootstrap";
import Masonry from "react-masonry-css";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const colorArray = [
  "#DAF7A6",
  "#FFC300",
  "#FF5733",
  "#C70039",
  "#900C3F",
  "#581845",
]; 
function Glimmers() {
  const [glimmers, setGlimmers, addItem, editItem] = useLocalStorage("glimmers", ["no glimmers"]);
  const [inputText, setInputText] = useState("");
  const [editFlag, setEditFlag] = useState(false)

  const addOnClickHandler = () => {
    const newGlimmers = [...glimmers, inputText];
    setGlimmers(newGlimmers);
    setInputText('');
  };

  const breakpointColsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  const removeItem = (itemToRemove) => {
    const updatedGlimmers = glimmers.filter((item) => item !== itemToRemove);
    setGlimmers(updatedGlimmers);
  };

  
  const handleEdit=(item, index, inputText)=>{
    setEditFlag(!editFlag)
    setInputText(item)
    editItem(item, index, inputText)

  }
  return (
    <Container className="w-100 d-flex justify-content-center align-items-center flex-column gap-5 mt-4">
      <Row className="w-50">
        <InputGroup className="">
          <Form.Control
            placeholder="Enter Trigger"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addItem(inputText);
                setInputText("");
              }
            }}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => {
              addItem(inputText);
              setInputText("");
            }}
          >{
              editFlag ? <MdModeEditOutline onClick={handleEdit} /> : <IoMdAdd />
            }

          </Button>
        </InputGroup>
      </Row>
      <Row className="w-100">
        <Masonry
          breakpointCols={breakpointColsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {glimmers.map((item, index) => (
            <Card
              key={index}
              className="p-3"
              style={{ backgroundColor: colorArray[index % colorArray.length] }}
            >
              <Card.Body>{item}</Card.Body>
              <Card.Footer className="justify-content-between p-0 ps-3">
                {/* <div>12/13/2022</div> */}
                <div>
                  <span style={{ paddingRight: "1.3rem", fontSize: "1.3rem" }} onClick={()=>handleEdit(item, index, inputText)}>
                    <MdModeEditOutline />
                  </span>
                  <span
                    style={{ fontSize: "1.3rem" }}
                    onClick={() => removeItem(item)}
                  >
                    <MdDelete />
                  </span>
                  {/* <button >Delete</button> */}
                </div>
              </Card.Footer>
            </Card>
          ))}
        </Masonry>
      </Row>
    </Container>
  );
}

export default Glimmers;
