// export const i18n = {
//   defaultLocale: "en",
//   detailsLocales: [
//     { code: "en", detail: "English" },
//     { code: "zh-TW", detail: "繁體中文" },
//   ],
// } as const;

// export type Locale = (typeof i18n)["detailsLocales"][number]["code"];

export const i18n: I18NConfigType = {
  defaultLocale: "en",
  detailLocales: [
      { code: "en", fullname: "English" },
      { code: "zh-TW", fullname: "繁體中文" },
    ],
}
