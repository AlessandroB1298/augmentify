# Augmentify

This is neat app that can help user's create a dataset, by augmenting an original dataset. Allowing the user to synthetically inflate the dataset.

## This project is for:
- [ ] Object Detection Models
- [ ] Image Classification Models
- [ ] Image Segmentation Models


## This project uses:

<p align="center">
  <img src="https://cdn.simpleicons.org/clerk/6C47FF" width="64" height="32" alt="Clerk" />
  <img src="https://cdn.simpleicons.org/typescript/3178C6" width="64" height="32" alt="TypeScript" />
  <img src="https://cdn.simpleicons.org/html5/E34F26" width="64" height="32" alt="HTML5" />
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" width="64" height="32" alt="Tailwind CSS" />
  <img src="https://cdn.simpleicons.org/nextdotjs/000000" width="64" height="32" alt="Next.js" />
</p>
## Running the lcal dev server

First, build the local development server

```bash
pnpm run build
# then
pnpm run dev
```


## File Structure:

```
├── api
│   ├── actions
│   └── uploadthing
├── dashboard
│   ├── (overview)
│   ├── about
│   ├── augmentation
│   ├── dataset
│   ├── layout.tsx
│   └── projects
├── db
│   ├── drizzle.ts
│   └── schema.ts
├── favicon.ico
├── fonts
│   ├── GeistMonoVF.woff
│   └── GeistVF.woff
├── globals.css
├── layout.tsx
├── lib
│   ├── helperFunctions
│   └── utils
├── page.tsx
├── sign-in
│   └── [[...sign-in]]
├── sign-up
│   └── [[...sign-up]]
├── types
│   └── projectTypes.ts
└── ui
    ├── assets
    ├── components
    ├── dashboard
    ├── fonts.ts
    ├── global.css
    └── projects
```

## Understanding the connection with Drizzle, Clerk, and Neon!

```
So...These technologies are my big three, understanding how these 
technologies work together is paramount to really amazing websites,
that balance both user-experience and dev-experience!

```

### Clerk

`Clerk allows us to abstract handling user sign-in and sign-up!`

``` ts
import {SignIn} from "@clerk/nextjs";

export default function Page() {
    return(
    <div className="flex justify-center items-center min-h-screen">
        <SignIn
            path="/sign-in"
            routing="path"
            signUpUrl="/sign-up"
            forceRedirectUrl="/dashboard"  // Add this as well
            fallbackRedirectUrl="/dashboard"
        />
    </div>
    )
} 
```
```
Above is an example of how to use clerk as a component,
We use the clerk provider component to wrap around our layout.tsx
in the root of app!

This allows us to add very easy components in our app in under 
ten minutes!

```

`NOTE: Make sure to paste the api key into your .env.local file in your root`

`NOTE: Also make note of the naming covention of the folders inside of app, this is very important for next.js`

`NOTE: You MUST configure your middleware.ts file to handle requests, and who you should see what in your project.`

### Drizzle / Neon

```
Drizzle and Neon, are amazing services that allow 
us very easy access to a database, where we can 
read and write to a sql-esk database.
```

Read more about [Neon](https://neon.tech/docs/guides/nextjs)

```
Below is snippet of how we set up drizzle and neon,
essentially we should make note of a few things:
```
1. drizzle.ts 
2. schema.ts 

```
These files are very important, also note, there is 
a drizzle.config.ts file that also is very important 
to make note of.

Anyways, the two files above, are what allow us to 
create actions on the database, which allow the 
user to (currently) retreive data (based on their userid)
and add data.


Schema is very important, it is where we define the types
of data we allow the user to send

```
 
