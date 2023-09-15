module.exports = {
    root: true,
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    extends: ['@ts-full-stack/eslint-config/nestjs'],
};
