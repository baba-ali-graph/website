-----------Sample Inspiration Site-----------
1. https://camillemormal.com/about
2. https://aristidebenoist.com/






## SSHing

```sh

sudo -s -H && eval "$(ssh-agent -s)"
ssh-add ~/.ssh/key_id
```

---

## text distortion effect with blotter js

```tsel
const MathUtils = {lineEq, lerp }


const material = new Blotter.LiquidDistortionMaterial()

material.uniform  = {uSpeed.value, uVolatility.value, uSeed.value}


const blotter = new Blotter(material)

each blotter element:
    const text = new Blotter.Text(el.innerHTML)
    blotter.addT(text)
    el.innerHTML = ""
    const generated = blotter.forText(text)
    el.appendChild(generated)


function rerendering() {
    const currentScroll = window.pageYOffset
    const uniformValueRange = [0,1]

    const diff = Math.abs(window.pageYOffset-currentScroll)

    const newVolatility = Math.lerp(...)

    currentScroll = window.pageYOffset

    reqAnimationFrame(rerendering)
}

reqAnimationFrame(rerendering)

```

---

## How to run svelkit app in heroku

```ts
// config.ts

kit: {
    target: '#app',
    adapter: adapter({env:{port}})
}

```

### Prisma Usage and Configuration

```js
// Relations in prisma
id Int @id @unique @default(@autoincrement())
book Book @relation(fields: [bookId], references:[uid])
bookId: String

// Generators and  Datasources

generator client {
    provider = "prisma-client-js"
}

datasource db {
    provider = "postgresql"
    url = env("DB_URL")
    username = env("DB_USERNAME")
    password = env("PASSWORD")
}



// Setting up the client
import {PrismaClient} from '@prisma/client'

const client = new PrismaClient()
export const functA = async ({local}) => {...}

```

---

// TEMP

/\*\*

- The useId hooks helps in creating isomorphic ids
- that remains the same in across the server and client.
-
- A suffix or prefix is attached to when used for multiple items
-
- When hydration is complete, the id within the component is the same
- even though it is randomly generated and the function is run again
-
- Very useful in debugging and when a unique id is needed for server generated components
  \*/
  export const ARandomComponent = () => {
  const id = useId();

return (

<div id={id} className="random">
<div id={`${id}-child1`}>Hello there, I am a random component</div>
</div>
);
};

---------------------Yew Sample---------------
// terminal stuffs

```sh
cargo install trunk
cargo new barcode_app
```

// file: package.toml

```toml

dependencies
yew = [version = "0.1.0, features = ['csr']]

```

// file: main.rs

```rs
use yew::prelude::*;


#[function_component(BarcodeScanner)]
fn barcode_scanner() -> Html {

    let codes:Vec<String> = ["2334902".to_string(), "s3123c".to_string().collect::<Html>()];
    codes = codes.iter().map([code] => html! {
        <p> {"{}", code}</p>
    } )
    html! {
        <div class={"p-4 m-4 my-2"}>
            {}
        </div>
    }
}


fn main() {
    yew::Renderer::<App>::new().render();
}



// file: WithLoader.rs
//prelude

#[derive(Properties, PartialEq)]
struct WithLoaderProps {
    isLoading: bool,
    error: bool,
    isUpdating: bool,
}

#[function_component(WithLoader)]
fn with_loader
```
