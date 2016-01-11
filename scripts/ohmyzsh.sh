#!/bin/bash

tmp=$(mktemp -d -t hexeract.XXXXXXXXXX)
mkdir -p
sudo apt-get install -y zsh git
sudo chsh -s /bin/zsh
wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O $tmp/install.sh
sed -i 's/env zsh/#env zsh/g' $tmp/install.sh
bash "$tmp/install.sh"
sed -i 's/robbyrussell/agnoster/g' ~/.zshrc
wget https://github.com/powerline/powerline/raw/develop/font/PowerlineSymbols.otf -O $tmp/PowerlineSymbols.otf
wget https://github.com/powerline/powerline/raw/develop/font/10-powerline-symbols.conf -O $tmp/10-powerline-symbols.conf
mkdir ~/.fonts/
mv "$tmp/PowerlineSymbols.otf" ~/.fonts/
sudo fc-cache -vf ~/.fonts/
mkdir -p ~/.config/fontconfig/conf.d/
mv "$tmp/10-powerline-symbols.conf" ~/.config/fontconfig/conf.d/
exit 0
