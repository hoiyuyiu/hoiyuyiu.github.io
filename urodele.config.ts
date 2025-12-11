export const config = {
  github: {
    login: "hoiyuyiu", // github login name, not user name
    repo: "hoiyuyiu.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "Homare",
    brand: "Urodele",
    description: "A self-owned full-static blog system",
  },
  footer: {
    copyright: "© hoiyuyiu",
    copyrightUrl: "https://github.com/hoiyuyiu",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
