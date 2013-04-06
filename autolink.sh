find . -name '*.md' | xargs perl -pi -w -e 's/ (http[^\s]+)/ [$1]($1)/g;'
