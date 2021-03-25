module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.tsx', '.jsx', '.js', '.json'],
        alias: {
          screens: './src/screens',
          navigations: './src/navigations',
          components: './src/components',
          hooks: './src/hooks',
          theme: './src/theme',
          models: './src/models',
          store: './src/store',
          service: './src/service',
          config: './src/config',
        },
      },
    ],
    'babel-plugin-styled-components',
  ],
};
