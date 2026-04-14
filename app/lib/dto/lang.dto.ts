import { ReactNode } from "react";

export interface Lang {
  lang: string;
  nav: {
    home: string;
    products: string;
    contact: string;
  };

  hero: {
    ctaShop: ReactNode;
    title: string;
    subtitle: string;
    viewProducts: string;
    contact: string;
  };

  about: {
    title: string;
    text1: string;
    text2: string;
    badge: string;
    features: {
      comfort: string;
      comfortDesc: string;
      safety: string;
      safetyDesc: string;
      style: string;
      styleDesc: string;
      vision: string;
      visionDesc: string;
    };
  };

  products: {
    title: string;
    view: string;
    viewAll: string;
    items: {
      daily: ProductItem;
      monthly: ProductItem;
      color: ProductItem;
    };
  };

  whyUs: {
    title: string;
    items: WhyUsItem[];
  };

  contact: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    left: {
      title: string;
      desc: string;
      chat: string;
      whatsapp: string;
    };
    form: {
      success: string;
      name: string;
      phone: string;
      message: string;
      placeholderName: string;
      placeholderPhone: string;
      placeholderMessage: string;
      button: string;
    };
  };

  footer: {
    desc: string;
    nav: string;
    contact: string;
    privacy: string;
    terms: string;
  };
}

// 🔹 отдельные типы (чтобы код был чище)
export interface ProductItem {
  name: string;
  desc: string;
}

export interface WhyUsItem {
  title: string;
  desc: string;
}
