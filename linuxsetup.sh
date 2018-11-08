#!/bin/bash

# ----------
# ESSENTIALS

cd ~
sudo apt update
sudo apt install -y \
    firefox \
    git \
    curl \
    xclip

# -----------------------
# CKB-NEXT CORSAIR DRIVER
# sudo apt install build-essential cmake libudev-dev qt5-default zlib1g-dev libappindicator-dev libpulse-dev libquazip5-dev

# -----------------
# TERMINAL & PROMPT

sudo apt install -y zsh

# oh my zsh
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

cd ~/Documents
mkdir -p git/alamiikka
cd alamiikka
git clone https://github.com/alamiikka/pure
cd pure
sudo ln -s "$PWD/pure.zsh" "$HOME/.zfunctions/prompt_pure_setup"
sudo ln -s "$PWD/async.zsh" "$HOME/.zfunctions/async"

cd ~
sed -i '/ZSH_THEME="/c\ZSH_THEME=""' .zshrc

curl https://raw.githubusercontent.com/alamiikka/SmallRandomThings/master/zsh/zshrcappend.txt >> .zshrc

# ---------------
# GNOME SHORTCUTS

# unset
gsettings set org.gnome.desktop.wm.keybindings switch-applications "[]"
gsettings set org.gnome.desktop.wm.keybindings switch-applications-backward "[]"
# set
gsettings set org.gnome.desktop.wm.keybindings switch-windows "['<Super>Tab', '<Alt>Tab']"
gsettings set org.gnome.desktop.wm.keybindings switch-windows-backward "['<Shift><Super>Tab', '<Shift><Alt>Tab']
