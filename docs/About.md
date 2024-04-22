A simple document page created using markdown(don't even need to write HTML myself)
A quick markdown cheat sheet for myself(and maybe people who read this page)

---

Element Heading
```
# H1
## H2
### H3
```

---

**Bold text**
```
**Text**
```

---

*Italic*
```
*Text*
```

---

>Blockquote
```
>text
```

---

1. Ordered List (1)
2. Ordered List (2)
3. Ordered List (3)
```
1. List
2. List
3. List
```

---

`code`
```
`code`
```

---

Horizontal Rule

--- 
```
---
```

---

[link](http://localhost:3000/docs/About) (I will edit this when I deployed the website)
```
[title](https://www.example.com)
```

---

![img](\img\logo.svg) (Just an example image I have now, Insert whatever image you want for yourself)
```
![img](YourImage.jpg)
```

---

Intro to MD syntax done, moving forward to docusaraus config
---

Navbar configuration 

Locate `docusaurus.config.mjs`
with in the file `.docusaurus`
find the code
```
"navbar": {
      "title": "My Site",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "type": "docSidebar",
          "sidebarId": "tutorialSidebar",
          "position": "left",
          "label": "Tutorial"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
      ]
}
```
(Should be at line 42-61)
After the last item open with `{"to":"/your page directory", "label":"What it show on the navbar", "position":"left/right"}`

My example at this current page "Aboutnotmd"
```
        {
          "to": "/Aboutnotmd",
          "label": "Aboutnotmd",
          "position": "left"
        },
```

---

Including the navbar at any new page
---

1. locate the `page` folder
2. Create a new file `example page` within the folder
3. Wrap everything in the `<layout></layout>` component
4. My example at the About not MD page
```
import React from 'react'
import Layout from '@theme/Layout';


const Aboutnotmd = () => {
  
  return (
    <Layout>
    <div>Aboutnotmd</div>
    </Layout>
  )
}

export default Aboutnotmd
```

---

Built-in function components from docusaurus
---

Locate `src/components/Homepage/index.js` file
Locate the following code
```
function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

In the following code block, the function `HomepageFeatures()` map through the constant `FeatureList` and wrapped the `<Feature>` component within the same file. If you want to reuse the component, it is advised that to change the function Name and the constant List.

For example 
```
```