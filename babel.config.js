module.exports = {
    presets: [
        // ['@babel/preset-env',  { "modules": false } ],
        // ['@babel/preset-env', { "loose": true }],
        [ '@babel/preset-env' ],
        // [ '@babel/preset-react' ],
    ],
    plugins: [
        [ "@babel/plugin-proposal-class-properties"  ],
        [ "@babel/transform-runtime" ]
    ],
    // sourceType: "unambiguous",
};