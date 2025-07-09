import type { ReactElement, ReactNode } from "react";

import { accordion } from "@/app/(design)/components/[slug]/(demos)/accordion";
import { alert } from "@/app/(design)/components/[slug]/(demos)/alert";
import { avatar } from "@/app/(design)/components/[slug]/(demos)/avatar";
import { badge } from "@/app/(design)/components/[slug]/(demos)/badge";
import { breadcrumb } from "@/app/(design)/components/[slug]/(demos)/breadcrumb";
import { button } from "@/app/(design)/components/[slug]/(demos)/button";
import { calendar } from "@/app/(design)/components/[slug]/(demos)/calendar";
import { card } from "@/app/(design)/components/[slug]/(demos)/card";
import { chart } from "@/app/(design)/components/[slug]/(demos)/chart";
import { checkbox } from "@/app/(design)/components/[slug]/(demos)/checkbox";
import { dataTable } from "@/app/(design)/components/[slug]/(demos)/data-table";
import { datePicker } from "@/app/(design)/components/[slug]/(demos)/date-picker";
import { dialog } from "@/app/(design)/components/[slug]/(demos)/dialog";
import { dropdownMenu } from "@/app/(design)/components/[slug]/(demos)/dropdown-menu";
import { input } from "@/app/(design)/components/[slug]/(demos)/input";
import { menuBar } from "@/app/(design)/components/[slug]/(demos)/menu-bar";
import { select } from "@/app/(design)/components/[slug]/(demos)/select";
import { separator } from "@/app/(design)/components/[slug]/(demos)/separator";
import { skeleton } from "@/app/(design)/components/[slug]/(demos)/skeleton";
import { slider } from "@/app/(design)/components/[slug]/(demos)/slider";
import { sonner } from "@/app/(design)/components/[slug]/(demos)/sonner";
import { switchComponent } from "@/app/(design)/components/[slug]/(demos)/switch";
import { table } from "@/app/(design)/components/[slug]/(demos)/table";
import { tabs } from "@/app/(design)/components/[slug]/(demos)/tabs";
import { toggleGroup } from "@/app/(design)/components/[slug]/(demos)/toggle-group";
import { tooltip } from "@/app/(design)/components/[slug]/(demos)/tooltip";

interface Demo {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const demos: { [name: string]: Demo } = {
  accordion,
  alert,
  avatar,
  badge,
  breadcrumb,
  button,
  calendar,
  card,
  chart,
  checkbox,
  dialog,
  "date-picker": datePicker,
  "data-table": dataTable,
  "dropdown-menu": dropdownMenu,
  input,
  "menu-bar": menuBar,
  select,
  separator,
  skeleton,
  slider,
  switch: switchComponent,
  sonner,
  table,
  tabs,
  "toggle-group": toggleGroup,
  tooltip,
};
