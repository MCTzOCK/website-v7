/**
 * src/components/NavigationBar.tsx
 *
 * Author: Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright (c) 2018-2024 Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 30.09.2024
 *
 */

import * as React from "react";
import {
  Avatar,
  Button,
  Card,
  Dialog,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  Portal,
  Text,
} from "@radix-ui/themes";
import {
  FaBars,
  FaBook,
  FaBox,
  FaEnvelope,
  FaHouse,
  FaPerson,
  FaUser,
} from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";
import { useRouter } from "next/router";

export default function NavigationBar() {
  const router = useRouter();
  return (
    <>
      <Flex
        px={{
          initial: "2",
          md: "9",
        }}
        py={{
          initial: "2",
          md: "5",
        }}
        width={"100%"}
      >
        <Card style={{ width: "100%", boxShadow: "var(--shadow-6)" }}>
          <Flex align={"center"} justify={"between"}>
            <Flex
              gap={"5"}
              align={"center"}
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                router.push("/");
              }}
            >
              <Avatar
                fallback={"BS"}
                size={"4"}
                src={"https://avatars.githubusercontent.com/u/53553315?v=4"}
              />
              <Heading size={"7"}>Ben Siebert</Heading>
            </Flex>
            <Dialog.Root>
              <Dialog.Trigger>
                <IconButton size={"3"}>
                  <FaBars />
                </IconButton>
              </Dialog.Trigger>
              <Portal>
                <Dialog.Content
                  style={{
                    width: "100vw",
                    height: "100vh",
                    margin: 0,
                    position: "fixed",
                    right: 0,
                    top: 0,
                    borderBottomRightRadius: 0,
                    borderTopRightRadius: 0,
                  }}
                >
                  <Dialog.Title>Ben Siebert</Dialog.Title>
                  <Dialog.Description>
                    Hey, I'm Ben Siebert, a 17-year-old software engineer and
                    student from Germany.
                  </Dialog.Description>
                  <Grid
                    columns={{
                      initial: "1",
                      md: "2",
                    }}
                    mt={"4"}
                    gap={"6"}
                  >
                    <Link href={"/"}>
                      <Card
                        style={{ boxShadow: "var(--shadow-4)", height: "100%" }}
                      >
                        <Flex gap={"2"} align={"center"}>
                          <FaHouse />
                          <Heading size={"7"}>Home</Heading>
                        </Flex>
                        <Text>Go back to the home page.</Text>
                      </Card>
                    </Link>
                    <Link href={"/about"}>
                      <Card
                        style={{ boxShadow: "var(--shadow-4)", height: "100%" }}
                      >
                        <Flex gap={"2"} align={"center"}>
                          <FaUser />
                          <Heading size={"7"}>About me</Heading>
                        </Flex>
                        <Text>Learn more about me and my skills.</Text>
                      </Card>
                    </Link>
                    <Link href={"/projects"}>
                      <Card
                        style={{ boxShadow: "var(--shadow-4)", height: "100%" }}
                      >
                        <Flex gap={"2"} align={"center"}>
                          <FaBox />
                          <Heading size={"7"}>Projects</Heading>
                        </Flex>
                        <Text>Check out my projects and contributions.</Text>
                      </Card>
                    </Link>
                    <Link href={"/papers"}>
                      <Card
                        style={{ boxShadow: "var(--shadow-4)", height: "100%" }}
                      >
                        <Flex gap={"2"} align={"center"}>
                          <FaBook />
                          <Heading size={"7"}>Papers</Heading>
                        </Flex>
                        <Text>
                          Get an overview of my scientific papers about my
                          projects.
                        </Text>
                      </Card>
                    </Link>
                    <Link href={"/contact"}>
                      <Card
                        style={{ boxShadow: "var(--shadow-4)", height: "100%" }}
                      >
                        <Flex gap={"2"} align={"center"}>
                          <FaEnvelope />
                          <Heading size={"7"}>Contact</Heading>
                        </Flex>
                        <Text>
                          Contact me to get in touch or for business inquiries.
                        </Text>
                      </Card>
                    </Link>
                  </Grid>
                  <Flex gap={"3"} mt={"4"} justify={"end"}>
                    <Dialog.Close>
                      <Button variant={"soft"}>Close</Button>
                    </Dialog.Close>
                  </Flex>
                </Dialog.Content>
              </Portal>
            </Dialog.Root>
          </Flex>
        </Card>
      </Flex>
    </>
  );
}
