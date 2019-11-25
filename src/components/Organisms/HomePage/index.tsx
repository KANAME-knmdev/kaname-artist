import Container from "components/Atoms/Container";
import Header from "components/Molecules/Header";
import React, { useState } from "react";

import Dialog from "./Dialog";

const HomePages: React.FC<any> = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header />
      <Container>aaaa</Container>
      <Dialog open={isOpen} handleClose={() => setOpen(false)} />
    </>
  );
};

export default HomePages;
