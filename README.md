This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install the NPM packages

```
yarn install
```

Add Secrets to .env.local
```
$ touch .env.local
$ echo "NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN=..."
```

Run the development server

```
yarn dev
```

Go to [http://localhost:3000](http://localhost:3000) in your browser to see the site locally


Run ESLint
```
yarn run lint
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Vercel Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Steps to deploy: 
- Add your environment variables in your [Project Settings](https://vercel.com/docs/concepts/projects/environment-variables)
- Deploy your production build `vercel --prod` (* you cannot redeploy to Production from the Dashboard if it wasn't created via Git)

Check out [Live demo](https://joy-of-travel.vercel.app/)

![world map](/public/world-map.png)

![collage of travel pics](/public/travel-pics.png)