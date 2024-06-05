// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import typescript from "rollup-plugin-typescript2";

// export default {
//   input: "src/index.ts",
//   output: [
//     {
//       file: "dist/index.js",
//       format: "cjs",
//       sourcemap: true,
//     },
//     {
//       file: "dist/index.esm.js",
//       format: "esm",
//       sourcemap: true,
//     },
//   ],
//   plugins: [
//     resolve(),
//     commonjs(),
//     typescript({ useTsconfigDeclarationDir: true }),
//   ],
//   external: [
//     "react",
//     "react-dom",
//     "@mui/material",
//     "@emotion/react",
//     "@emotion/styled",
//     "react-hook-form",
//   ],
// };
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
  external: [
    "react",
    "react-dom",
    "@mui/material",
    "@emotion/react",
    "@emotion/styled",
    "react-hook-form",
  ],
};
