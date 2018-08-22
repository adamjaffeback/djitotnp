# djitotnp
Convert DJI csv tracks to Terrain Navigator Pro's TXF format.

## Run Locally

1. In a terminal window: `git clone https://github.com/adamjaffeback/djitotnp.git`
1. `cd djitotnp`
1. `npm install`
1. `npm start`. Wait for _Status_ to  be "Success".
1. Open [`localhost:3001`](localhost:3001) in your browser.

## Deploy

1. In a terminal window `npm run build`
1. Upload `docroot/` contents to S3.
1. Upload `docroot/assets contents to S3 `assets/` directory.
