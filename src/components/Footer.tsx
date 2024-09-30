/**
 * src/components/Footer.tsx
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
  DropdownMenu,
  Flex,
  Heading,
  Link,
} from "@radix-ui/themes";
import { FaFileContract, FaGavel } from "react-icons/fa6";
import { useRouter } from "next/router";

export default function Footer() {
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
            <Flex gap={"5"} align={"center"}>
              <Avatar
                fallback={"BS"}
                size={"3"}
                src={"https://avatars.githubusercontent.com/u/53553315?v=4"}
              />
            </Flex>
            <Button
              variant={"solid"}
              size={"3"}
              onClick={() => {
                router.push("/contact");
              }}
            >
              Contact me
            </Button>
            <Flex gap={"5"} align={"center"}>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant={"surface"} size={"3"}>
                    Legal
                    <DropdownMenu.TriggerIcon />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item asChild>
                    <Link href={"/legal/legal-notice"}>
                      <FaGavel />
                      Legal notice
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <Link href={"/legal/privacy-policy"}>
                      <FaFileContract />
                      Privacy Policy
                    </Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </>
  );
}
