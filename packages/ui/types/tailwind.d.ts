declare module "tailwindcss/defaultTheme" {
  interface DefaultTheme {
    fontFamily: {
      sans: string[]
      mono: string[]
      // другие шрифты если нужны
    }
  }
  const defaultTheme: DefaultTheme
  export default defaultTheme
} 