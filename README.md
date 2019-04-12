# nuxt-hosting-c-run

> My scrumtrulescent Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate

$ build dockerfile example
gcloud builds submit --project=XXXXXX --tag gcr.io/firebase-project-id/helloworld

$ image deploy to cloud-run
gcloud beta run deploy --project=XXXXXX --image gcr.io/firebase-project-id/helloworld
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
