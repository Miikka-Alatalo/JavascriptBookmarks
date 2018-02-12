if [[ $UID -eq 0 ]]; then
    local user_symbol='#'
else
    local user_symbol='$'
fi

local current_dir='%{$terminfo[bold]$fg[blue]%}%~%{$reset_color%}'

local git_branch='$(git_prompt_info)'

PROMPT="
 ${user_symbol} ${current_dir} ${git_branch}
%{$terminfo[bold]$fg[green]%}>>%{$reset_color%} %{$reset_color%}"
RPS1="%{$fg[red]%}%n@%m%{$reset_color%}"

ZSH_THEME_GIT_PROMPT_PREFIX="%{$fg[yellow]%}‹"
ZSH_THEME_GIT_PROMPT_SUFFIX="› %{$reset_color%}"
