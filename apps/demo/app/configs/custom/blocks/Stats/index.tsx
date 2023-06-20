/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ComponentConfig } from "core/types/Config";
import styles from "./styles.module.css";
import { getClassNameFactory } from "core/lib";
import { Section } from "../../components/Section";
import * as reactFeather from "react-feather";

const getClassName = getClassNameFactory("Stats", styles);

const icons = Object.keys(reactFeather).reduce((acc, iconName) => {
  console.log(reactFeather[iconName]);
  if (typeof reactFeather[iconName] === "object") {
    const El = reactFeather[iconName];

    return {
      ...acc,
      [iconName]: <El />,
    };
  }

  return acc;
}, {});

const iconOptions = Object.keys(reactFeather).map((iconName) => ({
  label: iconName,
  value: iconName,
}));

export type StatsProps = {
  items: {
    title: string;
    description: string;
    icon?: "Feather";
  }[];
  mode: "flat" | "card";
};

export const Stats: ComponentConfig<StatsProps> = {
  fields: {
    items: {
      type: "group",
      getItemSummary: (item, i) => item.title || `Feature #${i}`,
      defaultItemProps: {
        title: "Title",
        description: "Description",
        icon: "Feather",
      },
      groupFields: {
        title: { type: "text" },
        description: { type: "text" },
        icon: {
          type: "select",
          options: iconOptions,
        },
      },
    },
    mode: {
      type: "select",
      options: [
        { label: "flat", value: "flat" },
        { label: "card", value: "card" },
      ],
    },
  },
  defaultProps: {
    items: [
      {
        title: "Feature",
        description: "Description",
        icon: "Feather",
      },
    ],
    mode: "flat",
  },
  render: ({ items, mode }) => {
    return (
      <Section
        className={getClassName({ cardMode: mode === "card" })}
        maxWidth={"916px"}
      >
        <div className={getClassName("items")}>
          {items.map((item, i) => (
            <div key={i} className={getClassName("item")}>
              {/* <div className={getClassName("icon")}>{icons[item.icon]}</div> */}
              <div className={getClassName("label")}>{item.title}</div>
              <div className={getClassName("value")}>{item.description}</div>
            </div>
          ))}
        </div>
      </Section>
    );
  },
};
