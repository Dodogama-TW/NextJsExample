interface DetailLocal {
  code: Locale;
  fullname: string;
}

type Locale = "en" | "zh-TW";

interface I18NConfigType {
  defaultLocale: Locale;
  detailLocales: DetailLocal[];
}
