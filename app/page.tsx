import { FC } from "react";
import { HTag, Button, Paragraph, Tag } from "@/components";
import Image from "next/image";
import styles from "./page.module.css";

const Home: FC = () => {
  const a: number = 1;

  return (
    <>
      <HTag tag="h1">Заголовок</HTag>
      <Button appearance="primary" arrow="down">
        Кнопка
      </Button>
      <Button appearance="ghost">Кнопка 2</Button>
      <Paragraph size="s">
        Напишу сразу в двух курсах, так как проходил оба.
      </Paragraph>
      <Paragraph>Напишу сразу в двух курсах, так как проходил оба.</Paragraph>
      <Tag href="https://dev.to/eprikhodko/eslint-prettier-vs-code-create-react-app-airbnb-52bc">
        Photoshop
      </Tag>
      <Tag color="gray" size="l">
        10
      </Tag>
      <Tag color="green">-10 000</Tag>
      <Tag color="red" size="l">
        hh.ru
      </Tag>
      <Tag color="primary">Работа в Photoshop</Tag>
    </>
  );
};

export default Home;
