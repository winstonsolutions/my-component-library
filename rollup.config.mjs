import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        outDir: "./dist",
        declaration: false  // 禁用 TypeScript 的声明文件生成
      }),
      postcss({
        extract: true, // Extracts CSS to a separate file
        minimize: true, // Minifies CSS
      }),
      terser()
    ],
    external: ["react", "react-dom"]
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.d.ts",
      format: "esm"
    },
    plugins: [dts({
      respectExternal: true
    })],
    external: [/\.css$/]  // 确保也在类型定义中排除外部依赖
  }
];