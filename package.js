{
  "name": "cloudformed",
  "version": "0.1.0",
  "description": "A Github Javascript Action that performs CloudFormed deployments.",
  "main": "index.js",
  "scripts": {
    "build": "ncc build index.js -o dist"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jasongitmail/fast-webhook.git"
  },
  "keywords": [
    "GitHub",
    "Actions",
    "JavaScript",
    "Webhook"
  ],
  "license": "MIT",
  "dependencies": {
    "@actions/core": "^1.2.6",
    "superagent": "^6.0.0"
  },
  "devDependencies": {
    "@zeit/ncc": "^0.22.3"
  }
}
