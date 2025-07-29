module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      alias: {
        "@components": "./src/components",
        "@screens":    "./src/screens",
        "@services":   "./src/services",
        // te faltan estos alias:
        "@navigation": "./src/navigation",
        "@hooks":      "./src/hooks",
        "@constants":  "./src/constants",
        "@utils":      "./src/utils"
      }
    }]
  ]
};