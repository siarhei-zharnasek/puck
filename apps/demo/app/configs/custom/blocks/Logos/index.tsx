/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ComponentConfig } from "core/types/Config";
import styles from "./styles.module.css";
import { getClassNameFactory } from "core/lib";
import { Section } from "../../components/Section";
import * as reactFeather from "react-feather";

const getClassName = getClassNameFactory("Logos", styles);

export type LogosProps = {
  logos: {
    alt: string;
    imageUrl: string;
  }[];
};

export const Logos: ComponentConfig<LogosProps> = {
  fields: {
    logos: {
      type: "group",
      getItemSummary: (item, i) => item.alt || `Feature #${i}`,
      defaultItemProps: {
        alt: "",
        imageUrl: "",
      },
      groupFields: {
        alt: { type: "text" },
        imageUrl: { type: "text" },
      },
    },
  },
  defaultProps: {
    logos: [
      {
        alt: "google",
        imageUrl:
          "https://logolook.net/wp-content/uploads/2021/06/Google-Logo.png",
      },
      {
        alt: "google",
        imageUrl:
          "https://logolook.net/wp-content/uploads/2021/06/Google-Logo.png",
      },
      {
        alt: "google",
        imageUrl:
          "https://logolook.net/wp-content/uploads/2021/06/Google-Logo.png",
      },
      {
        alt: "google",
        imageUrl:
          "https://logolook.net/wp-content/uploads/2021/06/Google-Logo.png",
      },
      {
        alt: "google",
        imageUrl:
          "https://logolook.net/wp-content/uploads/2021/06/Google-Logo.png",
      },
    ],
  },
  render: ({ logos }) => {
    return (
      <Section className={getClassName()}>
        <div className={getClassName("items")}>
          {logos.map((item, i) => (
            <div key={i} className={getClassName("item")}>
              <img
                className={getClassName("image")}
                alt={item.alt}
                src={item.imageUrl}
                height={64}
              ></img>
            </div>
          ))}
        </div>
      </Section>
    );
  },
};
