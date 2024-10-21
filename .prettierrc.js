module.exports = {
  semi: true,
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  endOfLine: "auto",
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  importOrderSeparation: true,
};
