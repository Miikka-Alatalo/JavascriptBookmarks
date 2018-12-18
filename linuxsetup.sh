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
cd git/alamiikka
git clone https://github.com/alamiikka/pure
cd pure
mkdir ~/.zfunctions
sudo ln -s "$PWD/pure.zsh" /usr/local/share/zsh/site-functions/prompt_pure_setup
sudo ln -s "$PWD/async.zsh" /usr/local/share/zsh/site-functions/async
ln -s "$PWD/pure.zsh" "$HOME/.zfunctions/prompt_pure_setup"
ln -s "$PWD/async.zsh" "$HOME/.zfunctions/async"

cd ~
sed -i '/ZSH_THEME="/c\ZSH_THEME=""' .zshrc

curl https://raw.githubusercontent.com/alamiikka/SmallRandomThings/master/zsh/zshrcappend.txt >> .zshrc

## TODO: ohmyzsh plugins

# ---------------
# GNOME SHORTCUTS

# unset
gsettings set org.gnome.desktop.wm.keybindings switch-applications "[]"
gsettings set org.gnome.desktop.wm.keybindings switch-applications-backward "[]"
# set
gsettings set org.gnome.desktop.wm.keybindings switch-windows "['<Super>Tab', '<Alt>Tab']"
gsettings set org.gnome.desktop.wm.keybindings switch-windows-backward "['<Shift><Super>Tab', '<Shift><Alt>Tab']"

# ------
# VSCODE

## TODO: wait for vscode install

mkdir -p ~/.config/Code/User
cd ~/.config/Code/User
echo "{
    \"editor.tabSize\": 2
}" > settings.json

echo "[
    {
        \"key\": \"ctrl+shift+down\",
        \"command\": \"editor.action.copyLinesDownAction\",
        \"when\": \"editorTextFocus && \!editorReadonly\"
    },
    {
        \"key\": \"ctrl+shift+up\",
        \"command\": \"editor.action.copyLinesUpAction\",
        \"when\": \"editorTextFocus && \!editorReadonly\"
    },
    {
        \"key\": \"ctrl+d\",
        \"command\": \"editor.action.deleteLines\",
        \"when\": \"textInputFocus && \!editorReadonly\"
    },
]" > keybindings.json

code --install-extension akamud.vscode-theme-onedark
code --install-extension Angular.ng-template
code --install-extension dbaeumer.vscode-eslint
code --install-extension dracula-theme.theme-dracula
code --install-extension eg2.tslint
code --install-extension Equinusocio.vsc-material-theme
code --install-extension rbbit.typescript-hero
