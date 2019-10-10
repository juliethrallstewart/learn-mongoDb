npx create-next-app
npm install --save next react react-dom
npm install --save isomorphic-unfetch

{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}


npm run dev -- -p 4000

PORT=8000 npm start

mkdir hello-next
cd hello-next
npm init -y
npm install --save react react-dom next
npm install --save isomorphic-unfetch
mkdir pages