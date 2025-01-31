#!/usr/bin/env bash

echo "$PATH" >> .env

npm install
npm run dev -- --host
