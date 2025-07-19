# Namaste React


# Parcel
- creates a dev build
- Creates a local server
- HMR - Hot Module Management - which automatically refreshes the browser when there are any
changes happening in code
- parcel uses file watching algorithm which is in C++ , keeps an eye on all the files ,so as soon as you do any changes and save it, it does a re build everytime (happens with import ReactDOM from "react-dom/client";) , Every time it reduces the build time, because parcel caches the things and gives you faster builds
- Image optimization 
- Minification of production build files, it will do bundling of all files  and optimize it
- compress the files, it will remove all the wide spaces 
- consistent hashing
- differential bundling , App can be opened in any browser - this is supported by parcel, it gives a different bundling for every browser and apps 
- Diagnostics , gives good error handling 
- HTTPS - when you want to test something that only works with SSL , parcel supports this too 
- Parcel documentation - go through it
- Tree shaking Algorithm , when you are using only few functions , parcel will remove unused code for you
- Different dev and prod bundles
- prod build creation - npx parcel build index.html  - execution , it generates a dev build and puts it into the folder  dist. when you build a production build it will be build into the dist

