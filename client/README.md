# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

  "@reduxjs/toolkit": "^1.9.5", //상태관리를위함 리덕스툴킷
  "axios": "^1.5.0", //통신을 위함
  "js-cookie": "^3.0.5", //jwt토큰을 쿠키로 관리하기 위함
  "react": "^18.2.0",
  "react-datepicker": "^4.16.0", //회원가입에서 생년월일부분
  "react-dom": "^18.2.0",
  "react-hook-form": "^7.45.4", //회원관리,글작성등등 form 형식 관리하기 위함
  "react-intersection-observer": "^9.5.2", //무한스크롤구현하기 위함
  "react-modal": "^3.16.1", //모달창을 불러오기 위함
  "react-redux": "^8.1.2",
  "react-router-dom": "^6.14.2",
  "react-switch": "^7.0.0",
  "styled-components": "^6.0.7" //css관리를 위함
