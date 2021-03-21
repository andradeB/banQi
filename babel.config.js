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
          navigation: './src/navigation',
          components: './src/components',
          models: './src/models',
          store: './src/store',
        },
      },
    ],
  ],
};
