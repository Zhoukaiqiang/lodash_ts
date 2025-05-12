import type { RollupOptions } from "rollup";
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import pkgJson from "./package.json";

const config: RollupOptions[] = [
  {
    input: "src/main.ts",
    output: [
      {
        file: pkgJson.main,
        format: "cjs",
        name: pkgJson.name,
        exports: "named",
        sourcemap: true,
      },
      {
        file: pkgJson.module,
        format: "esm",
        name: pkgJson.name,
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      json(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "dist/types",
        sourceMap: true,
      }),
    ],
  },
  {
    input: "./dist/types/src/main.d.ts",
    output: [{ file: "dist/types/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];

export default config;
