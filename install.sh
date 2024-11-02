#!/bin/sh

wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo apt-get update && sudo apt-get -y install xvfb && sudo apt-get -y install python3-pip && pip3 install -r requirements.txt
