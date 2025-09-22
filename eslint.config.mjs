import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // 🔧 Desactiva bloqueo de "any" (permite avanzar sin romper build)
      "@typescript-eslint/no-explicit-any": "off",
      // 🔧 Variables no usadas: solo warning (útil en MVP)
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      // 🔧 Permite usar <img> sin bloquear (solo warning)
      "@next/next/no-img-element": "warn",
    },
  },
];

export default eslintConfig;