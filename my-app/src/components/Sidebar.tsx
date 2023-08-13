"use client";
import { Button } from "antd";

export default function Sidebar() {
  return (
    <div className="flex flex-col" id="sidebar-domain">
      <Button className="flex my-10 text-center">Page 1</Button>
      <Button className="flex my-2 text-center">Page 2</Button>
      <Button className="flex my-2 text-center">Page 3</Button>
    </div>
  );
}
