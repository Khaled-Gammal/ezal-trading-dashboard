"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { cn } from "@/lib/utils";

function NavLink({ data }) {
  const pathname = usePathname();

  function FilterBath() {
    return pathname.split("/")[1];
  }

  function isActive(active) {
    if (active === FilterBath()) {
      return true;
    }
    return false;
  }

  function isParentActive(parent) {
    if (parent && parent.includes(FilterBath())) {
      return true;
    }
    return false;
  }

  if (data.children && data?.children?.length > 0) {
    return (
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-0 px-0 py-0">
          <AccordionTrigger className={cn(" text-base font-normal hover:border-l-[6px] hover:border-l-primary rounded-t-[10px] rounded-b-[10px] h-[60px] flex items-center hover:no-underline")}>
            <p className="h-[46px] text-gray-400 text-base font-normal hover:bg-primary hover:text-[#fff] ml-4 pl-6 flex items-center gap-1 w-full rounded-sm">
              {data?.icon}
              {data?.title}
            </p>
          </AccordionTrigger>
          <AccordionContent>
            {data?.children.map((item) => (
              <Link key={item?.title} href={item?.path}>
                <SidebarMenuButton className=" text-gray-400 hover:text-primary  ml-4 pl-8 text-center flex">
                  <div class="lick-shape">
                    <div class="line"></div>
                    <div class="curve"></div>
                  </div>

                  {item?.title}
                </SidebarMenuButton>
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  } else {
    return (
      data?.path && (
        <Link key={data?.path} href={data?.path} className="no-underline">
          <SidebarMenuItem
            className={`${
              isActive(data?.active)
                ? "border-l-[6px] border-l-primary rounded-s-xl rounded-e-xl h-[60px] flex items-center text-base"
                : "hover:border-l-[6px] hover:border-l-primary rounded-t-xl rounded-b-xl h-[60px] flex items-center text-base"
            }`}
          >
            <SidebarMenuButton
              className={`h-[46px] ${
                isActive(data?.active)
                  ? "flex gap-[10px] text-base font-normal bg-primary text-[#fff] ml-4 pl-6"
                  : "flex gap-[10px] ml-4 pl-6 text-gray-400 text-base font-normal hover:bg-primary hover:text-[#fff]"
              }`}
            >
              {data?.icon} {data?.title}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </Link>
      )
    );
  }
}

export default NavLink;
