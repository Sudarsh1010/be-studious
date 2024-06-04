"use client";

import { UserButton } from "@clerk/nextjs";
import { Input } from "@nextui-org/input";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Search } from "lucide-react";
import { SideNav } from "./side-nav";

export const RCNavbar = () => {
  return (
    <header>
      <Navbar maxWidth="full" isBordered isBlurred shouldHideOnScroll>
        <NavbarContent className="md:hidden" justify="start">
          <NavbarMenuToggle />
          <NavbarBrand>
            <p className="font-bold text-inherit">Be Studious</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarMenu>
          <SideNav />
        </NavbarMenu>

        <NavbarBrand className="hidden md:flex">
          <p className="font-bold text-inherit">Be Studious</p>
        </NavbarBrand>

        <NavbarContent className="hidden gap-4 sm:flex" justify="end">
          <NavbarItem className="w-full max-w-md">
            <Input
              startContent={<Search />}
              placeholder="search"
              className="w-full max-w-md max-md:hidden"
            />
          </NavbarItem>

          <NavbarItem>
            <UserButton />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
};
