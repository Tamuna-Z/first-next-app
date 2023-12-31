"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/button/Button";

import CheckBox from "./components/checkBox/CheckBox";
import ToDoList from "./components/todolist/ToDoList";
import Products from "./components/Products/Products";
import Filters from "./components/Filters/Filters";

export default function Home() {
  return (
    <main>
      <div>
        <Button mode="outline" title="რეგისტრაცია" />
        <CheckBox />
        <ToDoList />
        <Products />
        <Filters />
      </div>
    </main>
  );
}
