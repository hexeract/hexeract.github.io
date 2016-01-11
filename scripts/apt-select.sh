#!/bin/bash

tmp=$(mktemp -d -t hexeract.XXXXXXXXXX)
sudo apt-get install -y 'python(3?)-bs4$'
sudo apt-get install -y git
git clone https://github.com/jblakeman/apt-select.git $tmp/apt-select
python $tmp/apt-select/apt-select.py
sudo mv /etc/apt/sources.list /etc/apt/sources.list.backup && \
sudo mv sources.list /etc/apt/sources.list
