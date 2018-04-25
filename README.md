# gatsby-remark-generic-extensions

Gatsby remark plugin to use commonmark generic directive extension in markdown

## Install

`npm install --save gatsby-remark-generic-extensions`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-generic-extensions',
          options: {
            elements: {
              Icon: {
                propsDefaultValues: {
                  size: 14,
                },
                html: {
                  properties: {
                    name: '::content::',
                    color: '::argument::',
                  },
                },
              }
            },
          },
        },
      ],
    },
  },
];
```
