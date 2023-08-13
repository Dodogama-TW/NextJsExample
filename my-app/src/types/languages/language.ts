interface DetailLocal {
    code: Locale;
    fullname: string;
}

type Locale = "en" | "zh-TW"

interface I18NConfigType {
    defaultLocale: Locale;
    detailLocales: DetailLocal[];
}

// {
//     defaultLocale: "en",
//     detailsLocales: [
//       { code: "en", detail: "English" },
//       { code: "zh-TW", detail: "繁體中文" },
//     ],
//   }