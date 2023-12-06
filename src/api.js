import ins1 from "./assets/ins1.png";
import ins2 from "./assets/ins2.png";
import ins3 from "./assets/ins3.png";
import ins4 from "./assets/ins4.png";
import tool1 from "./assets/tool1.png";
import tool2 from "./assets/tool2.png";
import tool3 from "./assets/tool3.png";
import tool4 from "./assets/tool4.png";

const turningTools = [
  {
    id: "39ej902",
    thumbnail: tool1,
    iso: "CP-A1104-L5 1115",
  },
  {
    id: "39ej902",
    thumbnail: tool2,
    iso: "CP-A1104-L5 1115",
  },
  {
    id: "39ej902",
    thumbnail: tool3,
    iso: "CP-A1104-L5 1115",
  },
  {
    id: "39ej902",
    thumbnail: tool4,
    iso: "CP-A1104-L5 1115",
  },
];

const inserts = [
  {
    id: "39ej902",
    thumbnail: ins1,
    iso: "CP-A1104-L5 1115",
  },
  {
    id: "39ej902",
    thumbnail: ins2,
    iso: "CP-A1104-L5 1115",
  },
  {
    id: "39ej902",
    thumbnail: ins3,
    iso: "CP-A1104-L5 1115",
  },
  {
    id: "39ej902",
    thumbnail: ins4,
    iso: "CP-A1104-L5 1115",
  },
];

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const iso = "CP-A1104-L5 1115";

const productProps = {
  "tool cutting edge angle (KARP1)": "115 deg",
  "tool cutting edge angle (KARP2)": "30 deg",
  "tool lead angle (PSIR)": "-25 deg",
  "clamping type code (MTP)": "S",
  "maximum ramping angle (RMPX)": "15 deg",
  "minimum bore diameter (DMIN1)": "85 mm",
  "minimum bore diameter (DMIN2)": "125 mm",
  "maximum overhang (OHX)": "45 mm",
  "вес товара": "0.2 кг",
  "functional width": "22 mm",
};

export async function getInserts() {
  return inserts;
}

export async function getTurningTools() {
  return turningTools;
}

export async function getMatchingInserts() {
  return inserts;
}

export async function getProductData() {
  return {
    description,
    iso,
    productProps,
    productImage: tool1,
  };
}
