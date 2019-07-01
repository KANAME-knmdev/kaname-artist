import React, { useState } from "react";

// component
import Container from "../../Atoms/Container";
import Header from "../../Molecules/Header";
import Dialog from "./Dialog";
import Card from "../../Molecules/Card";

// type

const HomePages: React.FC<any> = ({ lists }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header />
      <Container>
        {lists.map((v: any, i: number) => (
          <Card key={i}>
            {v.name}
            {v.nameRuby}
            {v.birth}
            {v.birthplace}
          </Card>
        ))}
      </Container>
      <Dialog open={isOpen} handleClose={() => setOpen(false)} />
    </>
  );
};

export default HomePages;
