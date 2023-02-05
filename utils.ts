import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import pkg from 'webpack';
const { webpack } = pkg;
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

export const dotenv_ = dotenv;
export const dir: string = dirname(fileURLToPath(import.meta.url)).split("node_modules")[0]
console.log(dir)
export const compiler = webpack({
    mode: 'development',
    entry: './src/app.ts',
    module: {
        rules: [
          {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
    },
    resolve: {
        extensions: ['.tsx','.ts','.js'],
    },
    output: {
        filename: 'bundle.js',
        path: resolve(dir, './public/')
    },
})