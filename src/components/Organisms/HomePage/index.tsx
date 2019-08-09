import React, { useState } from "react";

// component
import Container from "../../Atoms/Container";
import Header from "../../Molecules/Header";
import Dialog from "./Dialog";
import Card from "../../Molecules/Card";
import "./element";

// type

const HomePages: React.FC<any> = ({ lists, update, handleUpload }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header />
      <button onClick={() => setOpen(true)}>Edit</button>
      <Container>
        {lists.map((v: any, i: number) => (
          <Card key={i}>
            <simple-greeting
              message={v.name}
              myArray={JSON.stringify([v.nameRuby, v.birth, v.birthplace])}
              myBool
            ></simple-greeting>
          </Card>
        ))}
      </Container>
      <Dialog
        open={isOpen}
        handleClose={() => setOpen(false)}
        update={update}
        handleUpload={handleUpload}
      />
    </>
  );
};

export default HomePages;
